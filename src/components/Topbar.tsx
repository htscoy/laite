import type { PropsWithChildren } from "react";
import { Link } from "@tanstack/react-router";

function Topbar(props: PropsWithChildren) {
  return (
    <header className="flex justify-between px-8 py-2">
      <div></div>
      <nav>
        <ul>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Topbar };
