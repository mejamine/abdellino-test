import React from "react";
import logo from "../img/IMG.jpg"

export default function Card1() {
  return (
    <div className=" grid items-center justify-center" >
      <div className="  grid place-items-center  max-h-full  max-w-[100vw]  sm:pt-20 mx-auto sm:p-32 p-6 font-[sans-serif]">
        <div className="grid md:grid-cols-2 items-center gap-4  ">
          <div className="md:col-span-1">
            <div className="mb-12 sm:max-w-[50vw]">
              <h2 className="text-3xl font-extrabold sm:text-5xl font-lora italic  text-black">
              A PROPOS DE NOUS
              </h2>
              <p className=" pt-10 text-lg text-justify">Abdellino est une marque de vêtements en ligne fondée en 2023 par Marwen, un jeune entrepreneur passionné de mode. Inspiré par son désir de créer des tenues modernes et accessibles, Abdellino offre une collection de vêtements à la fois élégants et confortables, conçus pour s'adapter aux tendances actuelles tout en mettant en avant l'authenticité. Chaque pièce reflète le souci du détail et la qualité que Marwen souhaite partager avec ses clients à travers le monde. Abdellino se distingue par son engagement envers l'innovation et l'expression personnelle, permettant à chacun de trouver un style unique et affirmé.</p>
            </div>
          </div>
          <div className="text-center justify-center items-center">
            <img
              src={logo}
              className="grid place-items-center w-[20vw]  sm:ml-64 rounded-3xl mx-auto "
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
