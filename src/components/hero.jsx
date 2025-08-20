import { Button } from "./button";

export const Hero = () => {
  return (
    <div className="w-full min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>IT'S TIME TO GET</p>
        <h1 className="uppercase font-semibold  text-4xl sm:text-5xl md:texl-6xl lg:text-7xl  ">
          Swole<span className="text-blue-400">normous</span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        I hereby acknowledge that I may become
        <span className="text-blue-400"> unbelievably swolenormous </span>and
        accept all risks of becoming the local
        <span className="text-blue-400"> mass monstrosity,</span> afflicted with
        severe dismorpia unable to fit through doors.
      </p>
      <Button
        func={() => {
          window.location.href = "#generate";
        }}
        text="Accept & Begin"
      />
    </div>
  );
};
