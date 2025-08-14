import { useState } from "react";
import { SectionWrapper } from "./section-wrapper";
import { GeneratorHeader } from "./generator-header";
import { WORKOUTS, SCHEMES } from "../utils/swolder";

export const Generator = () => {
  const [showModal, setShowModal] = useState(false);
  const [poison, setPoison] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goals, setGoals] = useState("strength_power");

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <SectionWrapper
      header={"Generate your workout"}
      title={["It's", "Huge", "o'clock"]}
    >
      <GeneratorHeader
        index={"01"}
        title={"Pick your poison"}
        description={"Choose your workout"}
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => (
          <button
            onClick={() => setPoison(type)}
            className={
              "bg-slate-950 border border-blue-400 py-3 rounded-lg duration-200 hover:border-blue-600 capitalize"
            }
            key={typeIndex}
          >
            {type.replaceAll("_", " ")}
          </button>
        ))}
      </div>

      <GeneratorHeader
        index={"02"}
        title={"Lock on target"}
        description={"Select muscle judge for annihilation"}
      />
      <div className="bg-slate-950  border border-blue-400 rounded-lg flex flex-col">
        <button
          onClick={toggleModal}
          className="relative flex items-center justify-center p-3"
        >
          <p>Select muscle groups</p>
          <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
        </button>
        {showModal && (
          <div>
            Modal
            {/* <GeneratorHeader
              index={"01"}
              title={"Pick your poison"}
              description={"Choose your workout"}
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4"> */}
            {/* {Object.keys(WORKOUTS).map((type, typeIndex) => (
              <button
                className="bg-slate-950 border border-blue-400 py-3 rounded-lg duration-200 hover:border-blue-600 capitalize"
                key={typeIndex}
              >
                {type.replaceAll("_", " ")}
              </button>
            ))} */}
            {/* </div> */}
            //{" "}
          </div>
        )}
      </div>

      <GeneratorHeader
        index={"03"}
        title={"Become Juggernaut"}
        description={"Select your ultimate objective"}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => (
          <button
            onClick={() => setGoals({ scheme })}
            className="bg-slate-950 border border-blue-400 py-3 rounded-lg duration-200 hover:border-blue-600 capitalize"
            key={schemeIndex}
          >
            {scheme.replaceAll("_", " ")}
          </button>
        ))}
      </div>
    </SectionWrapper>
  );
};
