let goalStreak = 10;
let streak = (10 * 280) / goalStreak;

function Streak() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center mr-3.5">
        <div
          className={`w-12 h-12 rounded-full flex justify-center items-center`}
          style={{
            background: `conic-gradient(from 130deg, var(--color-streak) ${streak}deg, #ffffff00 0deg)`,
            maskImage: "radial-gradient(circle, transparent 60%, white 61%)",
            WebkitMaskImage:
              "radial-gradient(circle, transparent 63%, white 64%)",
          }}
        ></div>
        <div className="text-white absolute text-lg font-light ml-6">Streak</div>
      </div>
      <h3 className="text-white ml-1">10</h3>
    </div>
  );
}

export default Streak;
