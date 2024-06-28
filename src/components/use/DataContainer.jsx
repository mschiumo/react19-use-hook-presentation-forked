"use client";

import { Suspense, use } from "react";
import { ErrorBoundary } from "react-error-boundary";

const DataContainer = ({ positiveDataPromise }) => {
  return (
    <ErrorBoundary fallback={<p className="error">There was an error!</p>}>
      <Suspense fallback={<p>Fetching Data...</p>}>
        <DataComponent positiveDataPromise={positiveDataPromise} />
      </Suspense>
    </ErrorBoundary>
  );
};

const DataComponent = ({ positiveDataPromise }) => {
  const positiveData = use(positiveDataPromise);
  return (
    <div>
      <h1>Benefits of Utilizing use in React 19</h1>
      {positiveData &&
        positiveData.map((item) => (
          <li className="text-wrap" key={item.id}>
            {item.text}
          </li>
        ))}
    </div>
  );
};
export default DataContainer;
