import React from "react";

type tHiw = { image: string; label: string; description: string };

export default function HIW({ description, image, label }: tHiw) {
  return (
    <div>
      <picture>
        <img src={image} alt="hiw-1" className="w-16 aspect-square" />
      </picture>
      <h3 className="mt-5 text-xl font-bold">{label}</h3>
      <p className="text-neutral-500 font-light">{description}</p>
    </div>
  );
}
