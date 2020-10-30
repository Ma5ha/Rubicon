import textClip from "../textClip";

const testString = "i am a test string";

test("tex clip to return cliped string with 3 dots atfter cliping point", () => {
  expect(textClip(testString, 4)).toBe("i am...");
});
