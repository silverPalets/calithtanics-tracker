let maxDeg = 360;
let nextLvl = 40;
let calcXp = ((35 * maxDeg) / nextLvl) % 361;

function LvlStatus() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center ">
        <div
          className={`w-12 h-12 rounded-full flex justify-center items-center`}
          style={{
            background: `conic-gradient(from 110deg, var(--color-lvlFill) ${calcXp}deg, #ffffff00 0deg)`,
            maskImage: "radial-gradient(circle, transparent 60%, white 61%)",
            WebkitMaskImage:
              "radial-gradient(circle, transparent 63%, white 64%)",
          }}
        ></div>
        <div className="text-white absolute text-lg font-light">LvL</div>
      </div>
      <h3 className="text-white ml-1">10</h3>
    </div>
  );
}

export default LvlStatus;
