const errorHandler = require("./error-handler");

let status = jest.fn();
let json = jest.fn();
let req = jest.fn();
let next = jest.fn();
let res = {
  status,
  json
};
res.status.mockImplementation(() => res);
res.json.mockImplementation(() => res);
const genericErrorMessage = "An error has occoured";

describe("error-handler", () => {
  beforeEach(() => {
    jest.resetModules();
    this.error = {
      status: 401,
      type: "",
      message: "error",
      errors: ""
    };
    global.console = { error: jest.fn() };
  });

  it("call_test-environment_shouldnot-log-error", () => {
    process.env.NODE_ENV = "test";
    errorHandler()(this.error, req, res, next);
    expect(console.error).not.toBeCalled();
  });

  it("call_dev-environment_should-log-error", () => {
    process.env.NODE_ENV = "dev";
    errorHandler()(this.error, req, res, next);
    expect(console.error).toBeCalled();
  });

  it("call_standard-error-with-status-code-of-401_returen-standard-error", () => {
    //act
    errorHandler()(this.error, req, res, next);
    //assert
    expect(res.status).toBeCalledWith(this.error.status);
    expect(res.json).toBeCalled();
  });

  it("call_with-unknown-error_response-by-500", () => {
    //arrange
    let error = {};
    //act
    errorHandler()(error, req, res, next);
    //assert
    expect(res.status).toBeCalledWith(500);
  });
});
