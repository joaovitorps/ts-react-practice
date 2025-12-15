import { NavLink } from "react-router";

export default function Home() {
  return (
    <div>
      Content we have so far:
      <ul>
        <li>
          <NavLink to="/essentials" end>
            Essentials
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
