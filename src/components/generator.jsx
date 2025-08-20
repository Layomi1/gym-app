import { useState } from "react";
import { SectionWrapper } from "./section-wrapper";
import { GeneratorHeader } from "./generator-header";
import { WORKOUTS, SCHEMES } from "../utils/swolder";
import { Button } from "./button";

export const Generator = (props) => {
  const [showModal, setShowModal] = useState(false);
  const {
    poison,
    setPoison,
    goal,
    setGoal,
    muscles,
    setMuscles,
    updateWorkout,
  } = props;
  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleWorkoutType = (type) => {
    setMuscles([]);
    setPoison(type);
  };
  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((val) => val !== muscleGroup));
      return;
    }
    if (muscles.length > 2) return;
    if (poison !== "individual") {
      setMuscles([muscleGroup]);
      setShowModal(false);
      return;
    }

    setMuscles([...muscles, muscleGroup]);
    if (muscles.length === 2) {
      setShowModal(false);
    }
  }

  return (
    <SectionWrapper
      id={"generate"}
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
            onClick={() => handleWorkoutType(type)}
            className={
              "bg-slate-950 border border-blue-200 py-3 rounded-lg px-4 duration-200 hover:border-blue-600 capitalize" +
              (type === poison ? "border-blue-600" : "border-blue-400")
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
          <p className="capitalize">
            {muscles.length == 0 ? "Select muscle groups" : muscles.join(" ")}
          </p>
          <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
        </button>
        {showModal && (
          <div className="flex flex-col px-3 pb-3">
            {(poison === "individual"
              ? WORKOUTS[poison]
              : Object.keys(WORKOUTS[poison])
            ).map((muscleGroup, muscleGroupIndex) => (
              <button
                onClick={() => updateMuscles(muscleGroup)}
                key={muscleGroupIndex}
                className={
                  "uppercase px-4hover:text-blue-400 duration-200 " +
                  (muscles.includes(muscleGroup) ? "text-blue-400" : "")
                }
              >
                {muscleGroup.replaceAll("_", " ")}
              </button>
            ))}
          </div>
        )}
      </div>

      <GeneratorHeader
        index={"03"}
        title={"Become Juggernaut"}
        description={"Select your ultimate objective"}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => (
          <button
            onClick={() => setGoal({ scheme })}
            className={
              "bg-slate-950 border border-blue-200 py-3 rounded-lg duration-200 hover:border-blue-600 capitalize" +
              (scheme === goal ? "border-blue-600" : "border-blue-400")
            }
            key={schemeIndex}
          >
            {scheme.replaceAll("_", " ")}
          </button>
        ))}
      </div>
      <Button text={"Formulate"} func={updateWorkout} className="mb-5" />
    </SectionWrapper>
  );
};
