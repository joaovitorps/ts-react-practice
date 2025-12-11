import { NavLink } from "react-router";

function App() {
  return (
    <>
      <p className="read-the-docs">
        Hello world this is my first component in react :D
        <NavLink to="/" end>
          Home
        </NavLink>
      </p>
    </>
  );
}

export default App;
