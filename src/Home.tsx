import { NavLink } from "react-router";

export default function Home() {
  return (
    <div>
      Content we have so far:
      <ul>
        <li>
          <NavLink to="/app" end>
            App
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
