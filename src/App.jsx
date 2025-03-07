import "./index.css";
import Background from "./Background";
import LvlStatus from "./LvlStatus.jsx";
import Streak from "./Streak.jsx";
import MovementCategory from "./MovementCategory.jsx";

function App() {
  return (
    <Background className="">
      <header className="flex justify-between items-center">
        <LvlStatus />
        <Streak />
      </header>
      <main>
        <section className="mt-10 flex flex-col gap-2">
          <MovementCategory>Push</MovementCategory>
          <MovementCategory>Pull</MovementCategory>
          <MovementCategory>Squat</MovementCategory>
        </section>
      </main>
    </Background>
  );
}

export default App;
