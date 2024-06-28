import { useState } from "react";
import UseHookWithContext from "./components/use/UseHookWithContext";
import UseHookWithPromise from "./components/use/UseHookWithPromise";
import "./styles.css";

export default function App() {
  const [activeComponent, setActiveComponent] = useState(null);
  const renderComponent = () => {
    switch (activeComponent) {
      case "UseHookWithContext":
        return <UseHookWithContext />;
      case "UseHookWithPromise":
        return <UseHookWithPromise />;
      default:
        return <div>Select a component to render</div>;
    }
  };

  return (
    <div>
      <div className="nav-btns">
        <button
          className={activeComponent === "UseHookWithContext" ? "active" : ""}
          onClick={() => setActiveComponent("UseHookWithContext")}
        >
          use API with Context
        </button>
        <button
          className={activeComponent === "UseHookWithPromise" ? "active" : ""}
          onClick={() => setActiveComponent("UseHookWithPromise")}
        >
          use API with Promise
        </button>
      </div>
      <div>{renderComponent()}</div>
    </div>
  );
}
