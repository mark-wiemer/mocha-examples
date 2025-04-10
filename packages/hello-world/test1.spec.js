describe("failing first file", () => {
  const myTests = [
    { name: "test1", test: () => 2 + 2 === 5 },
    { name: "test2", test: () => 2 + 2 === 4 },
  ];

  myTests.forEach(({ name, test }) => {
    it(name, () => {
      if (!test()) {
        throw new Error("Oh no!");
      }
    });
  });
});
