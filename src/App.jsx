import "./index.css";
import Background from "./Background";
import LvlStatus from "./LvlStatus.jsx";
import Streak from "./Streak.jsx";
import MovementCategory from "./MovementCategory.jsx";
import AddButton from "./AddButton.jsx";

function App() {
  return (
    <Background className="">
      <header className="flex justify-between items-center">
        <LvlStatus />
        <Streak />
      </header>
      <main>
        <div className="mt-10 flex flex-col gap-2">
          <MovementCategory>Push</MovementCategory>
          <MovementCategory>Pull</MovementCategory>
          <MovementCategory>Squat</MovementCategory>
          <div className="flex justify-center mt-2.5">
            <AddButton></AddButton>
          </div>
        </div>
        <section>
          
        </section>
      </main>
    </Background>
  );
}

export default App;
