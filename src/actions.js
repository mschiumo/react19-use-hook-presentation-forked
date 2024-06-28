"use server";

export function fetchPositiveData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const n = Math.random();
      if (n < 0.75) {
        resolve([
          {
            id: 1,
            text: "Use provides more flexibility than useContext because it can be used conditionally in if statements",
          },
          {
            id: 2,
            text: "Integrates with Suspense and Error Boundaries to handle errors",
          },
          {
            id: 3,
            text: "Allows user to easily create fallbacks for promises that are currently resolving/in progress",
          },
        ]);
      } else reject("Error");
    }, 2000);
  });
}
