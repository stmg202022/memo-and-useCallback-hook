import "./App.css";
import Parent from "./Component/useCallback_memo_Hook/parent";
import UseMemo from "./Component/useMemo/useMemo";
import UseReducer from "./Component/useReducer/useReducer";

function App() {
  return (
    <div className="App">
      <h1>LET'S SEE ON CONSOLE </h1>
      <Parent />
      <UseMemo />
      <UseReducer />
    </div>
  );
}

export default App;
