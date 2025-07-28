import logo from "./logo.svg";
import "./App.css";
import Header from "./header";
function App() {
  return (
    <div className="App">
      {/*Header*/}
      <div className="app-header">
        <Header />
      </div>
      {/*Body*/}
      <div className="app-body"></div>
    </div>
  );
}

export default App;
