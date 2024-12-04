import { Response as ExpressResponse } from "express";
import { errorMap, VelocipedeError } from "../types/VelocipedeError";
import { PelotonError } from "../types/PelotonError";

export const handleResponse = async <APIData, VeloData>(
  response: ExpressResponse,
  apiResponse: Response,
  mapData: (data: APIData) => VeloData = (data) => data as unknown as VeloData
) => {
  const jsonData = await apiResponse.json();

  if (apiResponse.ok) {
    response.send({
      ...mapData(jsonData),
    });
  } else {
    const error = jsonData as PelotonError;
    const ErrorConstructor = errorMap.get(error.status) ?? VelocipedeError;
    const responseError = new ErrorConstructor(error.message);
    response.status(apiResponse.status).send({
      error: {
        ...responseError,
        // Not entirely sure why I have to explicitly include this message property
        message: responseError.message,
      },
    });
  }
};
