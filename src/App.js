import { useState } from "react";
import UseHookExample from "./components/use/UseHookExample";
import UseHookWithPromise from "./components/use/UseHookWithPromise";
import "./styles.css";

export default function App() {
  const [activeComponent, setActiveComponent] = useState(null);
  const renderComponent = () => {
    switch (activeComponent) {
      case "UseHookExample":
        return <UseHookExample />;
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
          className={activeComponent === "UseHookExample" ? "active" : ""}
          onClick={() => setActiveComponent("UseHookExample")}
        >
          Use Example
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
