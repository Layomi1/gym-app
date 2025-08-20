export const Button = ({ text, func }) => {
  return (
    <button
      onClick={func}
      className="px-8 mx-auto py-4 rounded-md border-[2px] border-blue-400 bg-slate-950  cursor-pointer duration-200 blueShadow"
    >
      {text}
    </button>
  );
};
