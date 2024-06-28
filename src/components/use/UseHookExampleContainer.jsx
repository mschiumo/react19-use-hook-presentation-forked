"use client";

import { Suspense, use } from "react";
import { ErrorBoundary } from "react-error-boundary";

const UseHookExampleContainer = ({ teamDataPromise }) => {
  return (
    <ErrorBoundary fallback={<p className="error">There was an error!</p>}>
      {/* add fallback to Suspense */}
      <Suspense>
        <HookExampleDataComponent teamDataPromise={teamDataPromise} />
      </Suspense>
    </ErrorBoundary>
  );
};

const HookExampleDataComponent = ({ teamDataPromise }) => {
  //declare team data using 'use' hook

  return (
    <div>
      <h1>Simulmedia UI Team!</h1>
      {/* //iterate over team data */}
    </div>
  );
};
export default UseHookExampleContainer;
