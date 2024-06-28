import { useState } from "react";
import { fetchPositiveData } from "../../actions";
import DataContainer from "./DataContainer";

const UseHookWithPromise = () => {
  const [positiveDataPromise, setPositiveData] = useState(null);
  const handlePositiveClick = () => {
    setPositiveData(fetchPositiveData());
  };

  return (
    <div>
      <button className="form-btn" onClick={handlePositiveClick}>
        Show Benefits
      </button>
      {positiveDataPromise && (
        <DataContainer positiveDataPromise={positiveDataPromise} />
      )}
    </div>
  );
};

export default UseHookWithPromise;
