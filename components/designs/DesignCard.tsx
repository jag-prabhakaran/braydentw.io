import React from "react";
import Image from "next/image";
import { kebabCase } from "@/utils/utils";
import Link from "next/link";

function DesignCard({ design }) {
  return (
    <div className="max-w-lg mx-auto flex flex-col projects-center md:projects-start md:justify-center" key={design.id}>
      <a href={design.link} target="_blank" className={`w-full relative rounded-xl border-fun-gray border p-2 transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink will-change-designCard`}>
        <img className="w-full h-auto rounded-md" src={design.img} alt={design.label}/>
      </a>
      <div className="w-full mt-5 text-center">
        <p className="text-xl font-bold">{design.caption}</p>
        <p className="text-fun-gray text-left text-sm">{design.description}</p> {/* Displaying description */}
        <a href={design.link} target="_blank" rel="noreferrer"></a>
      </div>
    </div>
  );
}

export default DesignCard;
