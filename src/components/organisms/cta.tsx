import React from "react";
import Button from "../atoms/button/button";
import Input from "../atoms/inputs/input";
import { IoIosArrowDown, IoIosPin } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";

export default function CTA() {
  return (
    <section className="w-[90%] mx-auto bg-white mt-10 p-4">
      <form action="" className="flex justify-between">
        <div className="flex flex-col">
          <label className="font-medium text-neutral-700 text-lg">Where</label>
          <Input placeholder="location" icon={{ end: <IoIosPin /> }} />
        </div>
        <div className="flex flex-col">
          <label className="font-medium text-neutral-700 text-lg">Date</label>
          <Input placeholder="date" icon={{ end: <MdOutlineDateRange /> }} />
        </div>
        <div className="flex flex-col">
          <label className="font-medium text-neutral-700 text-lg">Guests</label>
          <Input placeholder="guest" icon={{ end: <IoIosArrowDown /> }} />
        </div>
        <Button className="text-nowrap" size="l">
          Search Plan
        </Button>
      </form>
    </section>
  );
}
