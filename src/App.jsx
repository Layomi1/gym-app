import { useState } from "react";
import { Hero, Workout, Generator } from "./components";
import { generateWorkout } from "./utils/functions";

function App() {
  const [workout, setWorkout] = useState(null);
  const [poison, setPoison] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState("strength_power");

  function updateWorkout() {
    if (muscles.length < 1) return;
    let newWorkout = generateWorkout({ muscles, poison, goal });
    setWorkout(newWorkout);
    window.location.href = "#workout";
  }

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-600 to-slate-950 text-white text-sm sm:text-base">
      <Hero />
      <Generator
        poison={poison}
        setGoal={setGoal}
        setPoison={setPoison}
        setMuscles={setMuscles}
        goal={goal}
        muscles={muscles}
        updateWorkout={updateWorkout}
      />
      {workout && <Workout workout={workout} />}
    </main>
  );
}

export default App;
