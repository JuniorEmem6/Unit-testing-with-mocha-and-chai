const chai = require("chai");
const app = require("../app");
const chaihttp = require("chai-http");

chai.should();

chai.use(chaihttp);

describe("API Testing", () => {
  describe("GET /users", () => {
    it("it should get all the users", (done) => {
      chai
        .request(app)
        .get("/users")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('array');
          response.body.length.should.be.eq(0);
          done();
        });
    });
  });
});