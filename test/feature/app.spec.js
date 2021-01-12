import { expect } from "chai";
import supertest from "supertest";
import { describe } from "mocha";
import app from "../../src/server";

const request = supertest(app);

describe("GET: /v1", () => {
  it("should return a 200 success status and a welcome message", async () => {
    const { body } = await request.get("/v1").expect(200);

    expect(body.message).to.equal("Welcome to the Secret Service API");
  });

  it("should return a 404 for non-existing routes", async () => {
    const { body } = await request.get("/v1/notfound").expect(404);
    console.log(body)
    expect(body.message).to.equal("you are trying to access an unknow route");
  });
});
