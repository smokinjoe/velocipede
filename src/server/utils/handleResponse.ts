import { Response as ExpressResponse } from "express";
import { ErrorsMap } from "../types/VelocipedeError";
import { PelotonError } from "../types/PelotonError";

export const handleResponse = async <APIData, VeloData>(
  response: ExpressResponse,
  apiResponse: Response,
  mapData: (data: APIData) => VeloData = (data) => data as unknown as VeloData
) => {
  const jsonData = await apiResponse.json();

  if (apiResponse.ok) {
    response.send({
      statusCode: apiResponse.status,
      payload: mapData(jsonData),
    });
  } else {
    const error = jsonData as PelotonError;
    const responseError = new ErrorsMap[error.status as keyof typeof ErrorsMap](
      error.message
    );
    console.log(responseError);
    response.status(apiResponse.status).send({
      ...responseError,
      // Not entirely sure why I have to explicitly include this message property
      message: responseError.message,
    });
  }
};
