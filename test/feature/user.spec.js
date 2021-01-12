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
    //     it("should return 422 for missing email", (done) => {
    //       request
    //         .post("/v1/users/signup")
    //         .send(invalidEmail)
    //         .expect(422)
    //         .end((err, res) => {
    //           const { body, message } = res.body;
    //           if (err) return done(err);
    //           expect(message).to.equal("Request validation failed");
    //           expect(body[0].msg).to.equal("Invalid email provided");
    //           done();
    //         });
    //     });
    //   });
    //   describe("Signin user POST: /v1/users/signin", () => {
    //     it("should successfully log in a registered user", (done) => {
    //       expect(true).to.equal(true);
    //       request
    //         .post("/v1/users/signin")
    //         .send(validUser)
    //         .expect(200)
    //         .end(async (err, res) => {
    //           if (err) return done(err);
    //           const { body } = res.body;
    //           const [user, error] = await decode(body.token);
    //           if (error) return done(error);
    //           expect(user.email).to.equal(validUser.email);
    //           done();
    //         });
    //     });
    //     it("should return a 422 error if password field is empty", (done) => {
    //       const invalidaPassword = { ...validUser, password: "re" };
    //       request
    //         .post("/v1/users/signin")
    //         .send(invalidaPassword)
    //         .expect(422)
    //         .end((err, res) => {
    //           if (err) return done(err);
    //           const { message, body } = res.body;
    //           expect(message).to.equal("Request validation failed");
    //           expect(body[0].msg).to.equal("Password must be at 4-64 chars long");
    //           done();
    //         });
    //     });
    //     it("should return a 422 error if email field is invalid", (done) => {
    //       request
    //         .post("/v1/users/signin")
    //         .send(invalidEmail)
    //         .expect(422)
    //         .end((err, res) => {
    //           if (err) return done(err);
    //           const { message, body } = res.body;
    //           expect(message).to.equal("Request validation failed");
    //           expect(body[0].msg).to.equal("Invalid email");
    //           done();
    //         });
    //     });
    //   });
    //   it("should return a 401 error if user not valid", (done) => {
    //     expect(true).to.equal(true);
    //     request
    //       .post("/v1/users/signin")
    //       .send({ email: "robinhood@ynail.com", password: "not this time" })
    //       .expect(401)
    //       .end(async (err, res) => {
    //         const { body } = res;
    //         if (err) return done(err);
    //         expect(body.message).to.equal("Username or password incorrect");
    //         done();
    //       });
  });
});
