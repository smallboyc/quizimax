"use client";
import { useState } from "react";
import { quiz } from "../data";
import classNames from "classnames";

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [valid, setValid] = useState<number | null>(null);
  const [wrong, setWrong] = useState<number | null>(null);
  const [enableClick, setEnableClick] = useState(true);
  const [total, setTotal] = useState(0);
  const changeQuestion = (increment: any) => {
    const size = quiz.questions.length;
    let newQuestion = increment;
    if (newQuestion > size) newQuestion = size;

    setCurrentIndex(null);
    setValid(null);
    setWrong(null);
    setCurrentQuestion(newQuestion);
    setEnableClick(true);
  };
  const checkAnswer = (correct: number) => {
    if (currentIndex == correct) {
      setCurrentIndex(null);
      setValid(correct);
      setTotal(total + 1);
    } else {
      setCurrentIndex(null);
      setWrong(currentIndex);
    }
    setEnableClick(false);
  };
  return (
    <div className="max-w-container">
      <div className="wrapper">
        <div className="py-20 flex flex-col items-center">
          <h1 className="text-6xl font-bold my-5">
            Quiz<span className="text-green-400">1</span>max
          </h1>
          {quiz.questions.map(
            (question: any) =>
              currentQuestion === question.id && (
                <div key={question.id} className="flex flex-col w-full">
                  <div className="flex flex-col items-center my-4 gap-4">
                    <div className="bg-slate-800 text-white px-4 py-6 w-full flex flex-col items-center gap-2">
                      <h1 className="text-2xl font-bold">
                        {question.question}
                      </h1>{" "}
                      <h1 className="text-md text-green-300">
                        {question.severalAnswer
                          ? "plusieurs réponses"
                          : "réponse unique"}
                      </h1>{" "}
                    </div>
                    {question.answers.map((answer: any, index: number) => (
                      <div
                        key={index}
                        className={classNames(
                          index == currentIndex && enableClick
                            ? "bg-violet-400"
                            : index == valid
                            ? "bg-green-300"
                            : index == wrong
                            ? "bg-red-400"
                            : "bg-white",
                          "text-slate-800 font-semibold px-4 py-3 w-full flex flex-col items-center hover:scale-105 duration-300 ease-out shadow-sm"
                        )}
                      >
                        <button
                          className="w-full text-3xl"
                          value={answer}
                          onClick={() => setCurrentIndex(index)}
                        >
                          {" "}
                          {answer}{" "}
                        </button>
                      </div>
                    ))}

                    {enableClick && (
                      <button
                        onClick={() => checkAnswer(question.correctAnswer)}
                        className="bg-slate-300 text-2xl text-slate-800 font-semibold px-4 py-6 w-full flex flex-col items-center hover:bg-slate-400 duration-300 ease-out shadow-sm"
                      >
                        Valider
                      </button>
                    )}
                    <h2 className="my-2">
                      Question : <span>{question.id}</span> /{" "}
                      {quiz.questions.length}
                    </h2>
                  </div>

                  <div className="flex gap-5 flex-col items-center justify-center">
                    <button
                      className="bg-slate-200 p-3 my-2 hover:bg-slate-300 duration-300 ease-out shadow-sm"
                      onClick={() => changeQuestion(currentQuestion + 1)}
                    >
                      Question suivante
                    </button>
                    <h1 className="font-bold text-lg">Total : {total}</h1>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}
