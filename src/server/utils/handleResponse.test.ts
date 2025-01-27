import { Response as ExpressResponse } from "express";

import { handleResponse } from "./handleResponse";

const mockResponse = {
  send: jest.fn(),
  status: jest.fn(() => ({ send: jest.fn() })),
} as unknown as ExpressResponse;

const mockJsonResponse = {
  json: jest.fn(),
  ok: true,
} as unknown as Response;

// const mockErrorJsonResponse = {
//   json: jest.fn(),
//   ok: false,
//   status: 404,
// } as unknown as Response;

const setupErrorResponseData = (status: number, message: string) => {
  const jsonData = {
    error_code: "error_code",
    status,
    message,
  };

  return {
    json: jest.fn(() => Promise.resolve(jsonData)),
    ok: false,
    status,
  } as unknown as Response;
};

test("handleResponse should call response.send with mapped data if response is ok", async () => {
  const mapData = jest.fn();
  const jsonData = { data: "data" };
  mockJsonResponse.json = jest.fn(() => Promise.resolve(jsonData));

  await handleResponse(mockResponse, mockJsonResponse, mapData);

  expect(mockResponse.send).toHaveBeenCalledWith({ ...mapData(jsonData) });
});

test("handleResponse should call response.status and response.send with error data if response is not ok", async () => {
  const mockErrorJsonResponse = setupErrorResponseData(404, "Not Found");
  const mapData = jest.fn();

  await handleResponse(mockResponse, mockErrorJsonResponse, mapData);

  expect(mockResponse.status).toHaveBeenCalledWith(404);
  expect(mockResponse.send).toHaveBeenCalledWith({
    error: {
      errorType: "VelocipedeError",
      innerError: undefined,
      message: "Not Found",
      name: "NotFoundError",
      statusCode: 404,
    },
  });
});

describe("ErrorConstructor types", () => {
  test("should return VelocipedeError when error status is 500", async () => {
    const mockErrorJsonResponse = setupErrorResponseData(500, "Internal Error");
    const mapData = jest.fn();

    await handleResponse(mockResponse, mockErrorJsonResponse, mapData);

    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.send).toHaveBeenCalledWith({
      error: {
        errorType: "VelocipedeError",
        innerError: undefined,
        message: "Internal Error",
        name: "VelocipedeError",
        statusCode: 500,
      },
    });
  });

  test("should return ValidationError when error status is 400", async () => {
    const mockErrorJsonResponse = setupErrorResponseData(
      400,
      "Validation error"
    );
    const mapData = jest.fn();

    await handleResponse(mockResponse, mockErrorJsonResponse, mapData);

    expect(mockResponse.status).toHaveBeenCalledWith(400);
    expect(mockResponse.send).toHaveBeenCalledWith({
      error: {
        errorType: "VelocipedeError",
        innerError: undefined,
        message: "Validation error",
        name: "ValidationError",
        statusCode: 400,
      },
    });
  });

  test("should return NotFoundError when error status is 404", async () => {
    const mockErrorJsonResponse = setupErrorResponseData(404, "Not found");
    const mapData = jest.fn();

    await handleResponse(mockResponse, mockErrorJsonResponse, mapData);

    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockResponse.send).toHaveBeenCalledWith({
      error: {
        errorType: "VelocipedeError",
        innerError: undefined,
        message: "Not found",
        name: "NotFoundError",
        statusCode: 404,
      },
    });
  });

  test("should return UnauthorizedError when error status is 401", async () => {
    const mockErrorJsonResponse = setupErrorResponseData(
      401,
      "Unauthorized request"
    );
    const mapData = jest.fn();

    await handleResponse(mockResponse, mockErrorJsonResponse, mapData);

    expect(mockResponse.status).toHaveBeenCalledWith(401);
    expect(mockResponse.send).toHaveBeenCalledWith({
      error: {
        errorType: "VelocipedeError",
        innerError: undefined,
        message: "Unauthorized request",
        name: "UnauthorizedError",
        statusCode: 401,
      },
    });
  });

  test("should return a default 500 error when error status is not in the errorMap", async () => {
    const mockErrorJsonResponse = setupErrorResponseData(300, "Unknown error");
    const mapData = jest.fn();

    await handleResponse(mockResponse, mockErrorJsonResponse, mapData);

    expect(mockResponse.status).toHaveBeenCalledWith(300);
    expect(mockResponse.send).toHaveBeenCalledWith({
      error: {
        errorType: "VelocipedeError",
        innerError: undefined,
        message: "Unknown error",
        name: "VelocipedeError",
        statusCode: 300,
      },
    });
  });
});
