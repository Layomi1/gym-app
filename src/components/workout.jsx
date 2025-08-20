import { SectionWrapper } from "./section-wrapper";
import { ExerciseCard } from "./workout-card";

export const Workout = ({ workout }) => {
  return (
    <SectionWrapper
      id={"workout"}
      header={"welcome to the danger zone"}
      title={["The", "DANGER", "zone"]}
    >
      <div className="flex flex-col gap-4 px-4">
        {workout.map((exercise, i) => (
          <ExerciseCard key={i} i={i} exercise={exercise} />
        ))}
      </div>
    </SectionWrapper>
  );
};
