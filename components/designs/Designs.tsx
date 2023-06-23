import React from "react";
import { designs } from "@/data/content/designs";
import DesignCard from "../../components/designs/DesignCard";

function Designs() {
  return (
    <div className="grid grid-cols-1 gap-15 md:grid-cols-2 items-start">
      {designs.map((item, index) => {
        return <DesignCard design={item} key={index} />
      })}
    </div>
  );
}

export default Designs;
