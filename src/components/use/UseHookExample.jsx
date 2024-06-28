import { useState } from "react";
import { fetchTeamData } from "../../actions";
import UseExampleHookContainer from "./UseHookExampleContainer";

const UseExampleHook = () => {
  const [teamDataPromise, setTeamData] = useState(null);
  const handleClick = () => {
    setTeamData(fetchTeamData());
  };

  return (
    <div>
      <button className="form-btn" onClick={handleClick}>
        Show Team Members
      </button>
      {teamDataPromise && (
        <UseExampleHookContainer teamDataPromise={teamDataPromise} />
      )}
    </div>
  );
};

export default UseExampleHook;
