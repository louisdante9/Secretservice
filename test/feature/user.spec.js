import { expect } from "chai";
import supertest from "supertest";
import app from "../../src/server";
import { validUser, invalidEmail } from "../data";
import { tokenTransformer } from "../../src/utilities/helpers/jwt";

const request = supertest(app);

describe("Users Controller", () => {
  describe("Create User POST: /v1/users/signup", () => {
    it("should successfully create a new user", (done) => {
      expect(true).to.equal(true);
      request
        .post("/v1/register")
        .send(validUser)
        .expect(201)
        .end(async (err, res) => {
          const { body } = res;
          if (err) return done(err);
          console.log(body, 'yo!!!')
          const [user, error] = await tokenTransformer(body.token, 'verify');
          if (error) return done(error);
          expect(user.email).to.equal(validUser.email);
        });
        done();
    });
  });
  describe("Create User Validation POST: /v1/users/signup", () => {
    it("should return 409 on duplicate email", (done) => {
      request
        .post("/v1/register")
        .send(validUser)
        .expect(409)
        .end((err, res) => {
          const { body } = res;
          if (err) return done(err);
          expect(body.message).to.equal("sorry email already exist");
          done();
        });
    });
  });
});
