import { useState } from "react";

function Workspace() {
  let movements = ["push", "pull", "squat"];
  const [selected, setSelected] = useState(movements[0]);
  let movementsHTML = movements.map((move) => {
    return(<div
      key={move}
      className={`w-15 h-full flex items-center justify-center cursor-pointer border-none transition-colors text-white ${
        selected === move ? "bg-workspace" : "bg-[#645B5B]"
      }`}
      onClick={() => setSelected(move)}
    >
      {move}
    </div>);
  });

  return (
    <div className="bg-workspace h-[50vh] mt-8">
      <div className="bg-[#645B5B] h-10 flex items-center">
        {movementsHTML}
      </div>
    </div>
  );
}

export default Workspace;
