"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Amore coooosa",
      "AMORE COOOOOOOOSA?",
      "SI STAI SCHERZANDO LO SO, METTI SI",
      "ANCORA CHE SEI QUI PUTTTTTT",
      "MHMMMMMMM AMORE METTI SI",
      "PUTTTTTTTTT!!!!!",
      "JANNUUUU ME MARJANA IDDA NA KARO",
      "AYE NI HAJE V ETTHE AAAAA",
      "ME MARGHEA BSSSSS",
      "MERE MARE TO V BAD ETTHE HI AAAA",
      "PUTTTT HANJI KARDOOOOO",
      "AWWWWWWW INNI ATTITUDE JI",
      "CHLO LAST TRY PUTTTTTTT",
      "OKOKOKOKK LAST LAST",
      "HUN TA KARDOOOOOO!",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">AMORE STRONZO FINALMENTE EHHHHH, TIMAOOOO, IL NOSTRO PRIMO SAN VALENTINO DA VALENTINIIII, se così si può dire AHAHAHHAHAHAHAH, TIAMOOOOOO💞</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Sukhraj will u be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
