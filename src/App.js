import "./App.css";
import Parent from "./Component/useCallback_memo_Hook/parent";
import UseMemo from "./Component/useMemo/useMemo";

function App() {
  return (
    <div className="App">
      <h1>LET'S SEE ON CONSOLE </h1>
      <Parent />
      <UseMemo />
    </div>
  );
}

export default App;
