import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import RemovedString from "./RemovedString";
import SeparatedString from "./SeparatedString";
import InputString from "./InputString";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/rSrting">Removed String</Link>
            </li>
            <li>
            <Link to="/sSrting">Separated String</Link>
            </li>
          </ul>
        </nav>
       
        
       
        <Routes>
          <Route path="/rString" Component={RemovedString} />
          <Route path="/sString" Component={SeparatedString} />
          <Route path="/" Component={InputString} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
