import type { NextPage } from "next";
import Image from "next/image";
import LogoGroup from "../../public/other/MacrocosmLogo.svg";
import Guidance from "../../public/other/Guidance.png";
import Tangibility from "../../public/other/Tangibility.png";
import Community from "../../public/other/Community.png";
import { signatures } from "../configs/signatures";
import classNames from "classnames";
import { usePlausible } from "next-plausible";
import { MarqueeLayout } from "src/components/basics";
import { useEffect } from "react";

const Home: NextPage = () => {
  // Styles places here for easy editing of all elements with className = <nameOfClass>
  const paragraph = classNames("my-2 text-[17px] w-full text-[#e9e9ec]");
  const highlight = classNames("bg-[#30267c]");
  const header = classNames("font-bold text-2xl my-2.5");
  const horizonal_rule = classNames("my-2.5 border-solid border-0.1 border-[#747485]");

  const plausible = usePlausible();

  return (
    <main>
      <MarqueeLayout>
        <div className="mx-auto flex max-w-custom flex-col gap-0 px-4 pt-4">
          {/* <hr className={horizonal_rule} /> */}
          <h1 className="mb-4 mt-6 text-4xl font-bold text-white">We build digital tools to accelerate scientific research.</h1>
          <div className="mb-5 flex">
            <Image src={LogoGroup} height={19} width={240} alt="The human colossus logo" />
            <p className="m-0 ml-2.5 pt-0.5 font-mono text-sm text-[#747485]">/ May 1, 2023</p>
            <hr className={horizonal_rule} />
          </div>
          <hr className={classNames(horizonal_rule, "mb-2.5 mt-0")} />
          <p className={paragraph}>
            This group is part of an{" "}
            <span className={highlight}>experiment in building digital projects with specific focus on civilizational scale.</span> We're made
            up of a group of young people who enjoy tinkering on projects with high potential and immediate impact.
          </p>
          <p className={paragraph}>
            It's easier than it's ever been to build incredible things. The insane productivity that's being unlocked by AI is only going to accelerate, and
            with it, the need for <span className={highlight}>agentic people willing to</span> quickly take this technology and build products that
            <span className={highlight}> solve issues that people didn't think were possible to solve</span>.
          </p>

          <p className={paragraph}>
            We're incredibly excited about our capacity to build and shape the future and deeply optimistic about the future. If you're someone who is
            interested in donating their time and working incredibly hard to build, quite simply, <span className={highlight}>super exciting projects</span>,
            let us know! We'd love to have you.
          </p>
          <hr className={horizonal_rule} />

          <h1 className={"my-4 text-2xl font-bold"}>What are we building?</h1>
          <p className={paragraph}>
            To start, we’re working on building plugins for ChatGPT and other informational tools, while we work on building our core product: an LLM-based
            personal research assistant that helps you learn, teach, and publish.
          </p>
          <p className={paragraph}>
            We’re also working on some projects related to embedding search across large datasets that struggle from informational constraints, complex keyword
            generation, or specifically fit for nearest-neighbor vector search.
          </p>
          <p className={paragraph}>
            We're currently experimenting with the Arxiv and other databases that, if amplified correctly, could massively aid the research process, while also
            working on new search engines for USPTO patent databases, financial filings, and historical news datasets.
          </p>

          <div className="mt-6 flex flex-wrap justify-between gap-3">
            <button
              className="bold flex flex-grow h-10 cursor-pointer items-center justify-center rounded bg-[#5f4bdd] px-6 font-button text-sm font-bold text-white"
              onClick={() => {
                plausible("clicked-contact");
                window.open("https://alex.macrocosm.so");
              }}
            >
              See our work
            </button>
            <button
              className="bold flex flex-grow h-10 cursor-pointer items-center justify-center gap-7 rounded bg-[#191933] px-6 font-button text-sm font-bold text-white"
              onClick={() => {
                plausible("clicked-contact");
                window.open("mailto:contact@macrocosm.so?subject=Interested%20in%20joining%20the%20team...");
              }}
            >
              Join our team
            </button>
            <button
              className="bold flex flex-grow h-10 cursor-pointer items-center justify-center  gap-7 rounded bg-[#191933] px-6 font-button text-sm font-bold text-white"
              onClick={() => {
                plausible("clicked-contact");
                window.open("mailto:contact@macrocosm.so?subject=Reaching%20out...");
              }}
            >
              Contact us
            </button>
          </div>
          <div className="mt-12 mb-6 h-[270px] rounded-lg bg-[#00001c] px-4 pb-4 pt-1.5 shadow-custom">
            <h1 className="z-10 w-full bg-[#00001c] pt-1 font-semibold	">/ Signatures</h1>
            <div className="mt-3 flex h-52 flex-col gap-3.5 overflow-auto rounded">
              {signatures.map((signature, i) => (
                <div className="static flex h-10 items-center justify-between" key={i}>
                  <div className="flex shrink-0">
                    <Image src={signature.image} alt="The human colossus logo" width={40} height={40} className="rounded" />
                    <div className="mx-3 flex flex-col justify-between">
                      <h1 className="text-normal font-semibold leading-5.5 text-[#E9E9EC]">{signature.name}</h1>
                      <div className="mt-0 flex gap-2 font-mono text-xs leading-[16.5px] text-[#CCCCD2]">
                        <p className="text-[#747485]">as</p>
                        <p
                          className={classNames({
                            "text-[#e1b13e]": signature.gold,
                          })}
                        >
                          {signature.subject}
                        </p>
                        <p>/</p>
                        <p>{signature.age}</p>
                        <p className="text-[#747485]">from</p>
                        <p>{signature.location}</p>
                      </div>
                    </div>
                  </div>
                  {signature.signature ? (
                    <div className="flex h-full w-20 items-center justify-center">
                      <Image src={signature.signature} alt="The human colossus logo" className="relative rounded" width={78} height={25} layout="fixed" />
                    </div>
                  ) : (
                    <span className="align-middle  text-xl font-semibold text-[#4C4C60]">{signature.name.split(" ")[0]}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5 mb-6 rounded-lg bg-[#00001c] px-4 pb-4 pt-1.5 shadow-custom">
            <h1 className="z-10 w-full bg-[#00001c] pt-1 font-semibold">Get involved!</h1>
            <div className="mt-2.5 flex flex-wrap gap-6">
              <button
                className="bold flex h-10 cursor-pointer items-center justify-center rounded bg-[#191933] px-6 font-button text-sm font-bold text-white first-letter:flex"
                onClick={() => {
                  plausible("clicked-twitter");
                  window.open("https://twitter.com/macrocosmcorp");
                }}
              >
                Follow on Twitter
              </button>
              <button className="bold flex h-10 cursor-pointer items-center justify-center rounded bg-[#191933] px-4 font-button text-sm font-bold  text-[#747485]">
                Join the Discord
              </button>
            </div>
          </div>
          <p className="mt-4 mb-4 p-4 font-mono text-csm italic leading-5 text-[#747485]"></p>
        </div>
      </MarqueeLayout>
    </main>
  );
};

export default Home;
