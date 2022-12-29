import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className="md:h-[200vh] bg-slate-100 pb-5">
      <div className="w-full h-96 md:h-80 pt-16 px-4 pb-8 bg-primary-100 flex justify-center items-center shadow-lg">
        <h1 className="text-3xl text-white md:text-5xl font-bold text-center text-primary-500">
          History of Laws.
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center h-screen gap-6">
        <div className="rounded-lg md:ml-16 overflow-hidden">
          <Image
            alt="justice picture"
            src="/images/justice.png"
            width={450}
            height={450}
          />
        </div>
        <div className="flex flex-col mx-auto w-4/5 md:w-[500px] gap-4">
          <p className="text-sm md:text-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            ipsum deserunt quis aut, repellendus voluptatem maiores fuga
            officiis, eum libero quam incidunt autem! At ea modi corrupti amet
            possimus temporibus qui nemo reprehenderit praesentium maiores.
            Libero, provident nihil. Autem veniam ipsum eligendi aliquid neque
            voluptatum, illum adipisci quo ullam eum ad, a fugiat atque velit
            beatae natus error aut.
          </p>
          <p className="text-sm md:text-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            ipsum deserunt quis aut, repellendus voluptatem maiores fuga
            officiis, eum libero quam incidunt autem! At ea modi corrupti amet
            possimus temporibus qui nemo reprehenderit praesentium maiores.
            Libero, provident nihil. Autem veniam ipsum eligendi aliquid neque
            voluptatum, illum adipisci quo ullam eum ad, a fugiat atque velit
            beatae natus error aut.
          </p>
        </div>
      </div>
      <p className="mx-auto w-4/5 md:w-[1100px] text-sm md:text-normal">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
        explicabo sint rerum pariatur doloribus minus corporis. Ducimus
        explicabo, animi sunt vel excepturi soluta, eius eligendi doloribus
        adipisci non ad dignissimos. Explicabo est modi vero ipsam voluptatem
        illum officia! Fugiat maiores odio, in illum nostrum doloremque facilis
        earum alias delectus mollitia provident, quisquam reprehenderit quos
        rem! Facere dolore corporis ea omnis quibusdam beatae veniam autem modi.
        Praesentium ut atque consequatur quisquam!
      </p>
    </div>
  );
}

export default About;
