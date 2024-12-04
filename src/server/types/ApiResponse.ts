import { VelocipedeError } from "./VelocipedeError";

export type ApiResponse<T> = {
  statusCode: number;
  data?: T; // this will lead to axios having to return response.data.data, so maybe have this be payload ?
  error?: VelocipedeError;
};
