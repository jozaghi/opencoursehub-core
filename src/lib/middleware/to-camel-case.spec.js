const toCamelCase = require("./to-camel-case");

let reqMock = {
  body: {
    Test: "test"
  }
};
let resMock = {};
let nextMock = jest.fn();

describe("to-camel-case", () => {
  it("call_ReqBody_shouldBeInCamelcaseFormat", () => {
    toCamelCase(reqMock, resMock, nextMock);
    expect(reqMock.body.test).toBeDefined();
    expect(nextMock).toBeCalled();
  });

  it("call_nullBody_shouldNotThrowException", () => {
    toCamelCase({ body: null }, resMock, nextMock);

    expect(nextMock).toBeCalled();
  });
});
