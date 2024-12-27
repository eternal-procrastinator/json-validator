import { validate } from "./validate";

const validTestCases = [
  `{
    "firstName": "John",
    "lastName": "Smith",
    "gender": "man",
    "age": 30,
    "address": {
      "streetAddress": "150",
      "city": "San Diego",
      "state": "CA",
      "postalCode": "263142",
      "p": {
        "ab": []
      }
    }
  }`,
  `{
    "name": "Joe",
    "age": 25
  }`,
];

const invalidTestCases = [
  `{"name": "Joe", "age" }`,
  `{"name": "Joe", "age": }`,
  `{"name": "Joe", , "age": null}`,
  `{"name": "Joe", "age": null, "message": "John says "Hello!""}`,
  `["Hello", 3.14, true}`,
  `["Hello", 3.14, , true]`,
];

describe('validation', () => {
  validTestCases.forEach((data, index) => {
    it(`Valid test case ${index}`, () => {
      expect(validate(data)).toEqual(JSON.parse(data));
    });
  });

  invalidTestCases.forEach((data, index) => {
    it(`Valid test case ${index}`, () => {
      expect(validate(data)).toBeNull();
    });
  });
});
