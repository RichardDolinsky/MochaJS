// import request from "supertest"
import { expect } from "chai"
// var expect = require('chai').expect

// import createServer from "server"
// const app = createServer();
// var chaiJs = require('chai').expect
// var chaiHttp = require('chai-http');
// const chaiHttp = require('superagent')
// var expect = chaiJs.expect;
// chaiJs.use(chaiHttp);
// chaiJs.disable('x-powered-by')


const superagent = require('superagent')
describe("Check server - moj IT BLOK" , function() {

    it("M1" ,function(done){
        this.timeout(15000);
    superagent
  .get('**')
  .end((err:any, res:any) => {
    expect(res.statusCode).to.equal(200);
    // expect(res).to.have.status(200);
      console.log(res.body.status)
    done();
  });
  });
})