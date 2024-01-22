import React from "react";
import HIW from "../atoms/cards/hiw";

export default function HowItWork() {
  return (
    <section className="py-20 flex items-end gap-20">
      <div className="w-3/12 shrink-0 space-y-3">
        <h2 className="font-bold text-4xl">
          How It <br /> Works
        </h2>
        <p className="text-neutral-500">
          Apply here for a monthly subscription to Globetrotter, which is issued
          once a month
        </p>
      </div>
      <div className="flex-1 flex items-center justify-between translate-y-3">
        <HIW
          image="/images/how-it-works/hiw-1.png"
          description="Employees set their per paycheck contribution"
          label="Sign Up"
        />
        <HIW
          image="/images/how-it-works/hiw-2.png"
          description="Employers make a matching contribution"
          label="Contribute"
        />
        <HIW
          image="/images/how-it-works/hiw-3.png"
          description="Employees book their travel & vacation with their Toob card"
          label="Travel"
        />
      </div>
    </section>
  );
}
