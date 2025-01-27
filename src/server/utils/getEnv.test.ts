import { getEnv } from "./getEnv";

const originalEnv = { ...process.env };

describe("getEnv", () => {
  afterAll(() => {
    process.env = originalEnv;
  });

  it("should return 'local' when NODE_ENV is undefined", () => {
    delete process.env.NODE_ENV;
    const env = getEnv();
    expect(env).toBe("local");
  });

  it("should return the value of NODE_ENV when it is defined", () => {
    process.env.NODE_ENV = "production";
    const env = getEnv();
    expect(env).toBe("production");
  });
});
