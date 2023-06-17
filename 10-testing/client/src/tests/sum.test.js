const functionThatSumsNumbers = (a, b) => {
  return a + b;
};

test("calculates sum correctly", () => {
  const total = functionThatSumsNumbers(4, 4);
  expect(total).toEqual(8);
});
