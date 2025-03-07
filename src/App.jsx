import "./index.css";
import Background from "./Background";
import LvlStatus from "./LvlStatus.jsx";
import Streak from "./Streak.jsx";


function App() {
  return (
    <>
      <Background className="">
        <header className="flex justify-between items-center">
          <LvlStatus />
          <Streak/>
        </header>
      </Background>
    </>
  );
}

export default App;
