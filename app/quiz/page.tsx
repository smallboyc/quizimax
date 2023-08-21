"use client";
import { useState } from "react";
import { quiz } from "../data";
import classNames from "classnames";
import Link from "next/link";
import { AiOutlineReload } from "react-icons/ai";

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [valid, setValid] = useState<number | null>(null);
  const [wrong, setWrong] = useState<number | null>(null);
  const [enableClick, setEnableClick] = useState(true);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const changeQuestion = (increment: any) => {
    let newQuestion = increment;
    setCurrentIndex(null);
    setValid(null);
    setWrong(null);
    setCurrentQuestion(newQuestion);
    setEnableClick(true);
  };
  const checkAnswer = (correct: number) => {
    if (currentIndex == correct) {
      setScore(score + 1);
    } else {
      setWrong(currentIndex);
    }
    setTotal(total + 1);
    setCurrentIndex(null);
    setValid(correct);
    setEnableClick(false);
  };
  const printResult = (score: number) => {
    if (score <= 12) {
      return "Au moins on va apprendre à se connaitre !";
    } else if (score >= 20) {
      return "On doit déjà se connaitre je crois !";
    } else {
      return "Pas mal du tout !";
    }
  };
  return (
    <div className="max-w-container">
      <div className="py-20 flex flex-col items-center">
        {currentQuestion <= quiz.questions.length ? (
          quiz.questions.map(
            (question: any) =>
              currentQuestion === question.id && (
                <div key={question.id} className="flex flex-col w-full">
                  <div className="flex flex-col items-center my-4 gap-4">
                    <div className="bg-slate-800 text-white px-4 py-6 w-full flex flex-col items-center gap-2">
                      <h1 className="text-lg sm:text-2xl font-bold text-center">
                        {question.question}
                      </h1>{" "}
                      <h2 className="text-sm sm:text-base text-green-300">
                        Question : <span>{question.id}</span> /{" "}
                        {quiz.questions.length}
                      </h2>
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
                          "text-slate-800 font-semibold px-4 py-3 w-full flex flex-col items-center hover:scale-105 duration-300 ease-out shadow-sm tracking-wider"
                        )}
                      >
                        <button
                          className="w-full text-xl sm:text-2xl"
                          value={answer}
                          onClick={() => setCurrentIndex(index)}
                        >
                          {" "}
                          {answer}{" "}
                        </button>
                      </div>
                    ))}

                    {enableClick && currentIndex != null && (
                      <button
                        onClick={() => checkAnswer(question.correctAnswer)}
                        className="bg-slate-300 text-2xl text-slate-800 font-semibold px-4 py-6 w-full flex flex-col items-center hover:bg-slate-400 duration-300 ease-out shadow-sm"
                      >
                        Valider
                      </button>
                    )}
                    {wrong != null ? (
                      <h1 className="text-red-400 text-xl font-semibold">X</h1>
                    ) : (
                      valid != null && (
                        <h1 className="text-green-400 text-base sm:text-xl font-semibold">
                          {question.comment}
                        </h1>
                      )
                    )}
                  </div>

                  <div className="flex gap-5 flex-col items-center justify-center">
                    {!enableClick && (
                      <button
                        className="bg-slate-200 p-3 my-2 hover:bg-slate-300 duration-300 ease-out shadow-sm"
                        onClick={() => changeQuestion(currentQuestion + 1)}
                      >
                        {total == quiz.questions.length
                          ? "Finaliser le Quiz"
                          : "Question suivante"}
                      </button>
                    )}

                    <h1 className="font-bold text-lg mt-2">
                      Score : {score}/{total}
                    </h1>
                  </div>
                </div>
              )
          )
        ) : (
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold my-5">
              Total : {score} / {quiz.questions.length}
            </h1>
            <div className="mb-4">
              <Link href="/">
                <AiOutlineReload
                  size={32}
                  className="hover:scale-105 duration-150 ease-out hover:rotate-45"
                />
              </Link>
            </div>
            <p className="text-3xl font-bold text-purple-500">
              {printResult(score)}
            </p>
            <div className="flex flex-col gap-1 items-center my-7">
              {quiz.questions.map((question: any) => (
                <p>
                  <span className="font-bold">{question.question} : </span>
                  {question.answers[question.correctAnswer]}
                </p>
              ))}
              <Link
                className="bg-slate-200 p-3 my-4 hover:bg-slate-300 duration-300 ease-out shadow-sm"
                href="https://github.com/smallboyc/quizimax"
                target="_blank"
              >
                Code source
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
