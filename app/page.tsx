import Link from "next/link";
export default function Home() {
  return (
    <main className="max-w-container">
      <div className="flex flex-col items-center text-center gap-6 pb-20">
        <div className="flex flex-col gap-2 my-5 bg-white p-5 shadow-md">
          <h1>Hello les (bab)imacs.</h1>
          <p>Moi c'est Maxence, je viens de Nantes et je suis un 2002.</p>
          <p>
            <span className="font-bold">Quiz1max</span> va vous permettre de me
            découvrir un peu!
          </p>
          <p>
            Les informations de cette page vont vous aider à répondre à{" "}
            <span className="font-bold">certaines</span> questions de ce "petit"
            quiz. Parfois, il va falloir{" "}
            <span className="font-bold">tenter</span>, car c'est pas évident !
          </p>
        </div>
        <p>
          "J'adore la fiction, peu importe le domaine. J'aime les récits prenant
          place dans un monde dystopique, surtout le Post-apo et le Cyberpunk.
          Mon réalisateur préféré est Clint Eastwood.
        </p>
        <p>
          J'aime travailler, apprendre et donner le meilleur de moi-même. Même
          si on connaît l'échec, il faut aller de l'avant ! C'est très shonen
          ça.
        </p>
        <p>
          J'aime me creuser les méninges pour résoudre un problème et de voir
          les choses s'assembler au fur et à mesure.
        </p>
        <p>
          Bien que j'aime les maths, ce n'est pas là que je performais à la fac,
          je me débrouille, mais je préférais largement faire des "potions" dans
          un labo (j'avais un bon prof, normal).
        </p>
        <p>
          Faire du sport est indispensable pour moi, je suis assez polyvalent et
          j'adore les sports à sensations où je peux zigzaguer avec ma planche !
        </p>
        <p>J'aime voyager. Un jour, j'irai au pays du soleil-levant.</p>
        <p>
          J'ai grandi avec le rock des années 2000, avec les vieilles
          parodies, un jeu de 32 cartes et une série papier de 27 volumes."
        </p>
        <p className="font-bold">
          Vous pouvez ouvrir le quiz dans un nouvel onglet pour avoir cette page
          en parallèle.
        </p>

        <Link
          className="bg-slate-200 p-3 my-2 hover:bg-slate-300 duration-300 ease-out shadow-sm"
          href="/quiz"
        >
          Accès au quiz
        </Link>
      </div>
    </main>
  );
}
