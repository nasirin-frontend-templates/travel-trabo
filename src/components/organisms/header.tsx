import React from "react";
import Button from "../atoms/button/button";

export default function Header() {
  return (
    <header className="grid grid-cols-2 gap-3 mt-20">
      <div className="space-y-8 text-center">
        <h1 className="font-bold text-5xl text-teal-950 text-center ">
          Tour your dream <br /> destination with <br /> tourve
        </h1>
        <p className="font-medium text-neutral-400 ">
          Plan and book your perfect trip with expert <br /> advice, travel
          tips, destination information and <br /> inspiration from us .
        </p>
        <Button variant="outlined">Discover Now</Button>
      </div>
      <div className="relative flex gap-4">
        <picture>
          <img
            src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="vacation 1"
            className="rounded-lg"
          />
        </picture>
        <picture>
          <img
            src="https://images.unsplash.com/photo-1517999349371-c43520457b23?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="vacation 2"
            className="rounded-lg mt-20"
          />
        </picture>
        {/* <div className="rounded-md bg-white absolute left-20 bottom-10 shadow-md p-2 text-neutral-500 t">
          Destinasi Impian, Perjalanan Impian
        </div> */}
      </div>
    </header>
  );
}
