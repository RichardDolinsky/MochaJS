
const superagent = require('superagent')
import { expect } from "chai"
// import { response } from "express";

describe("Check server - moj IT BLOK" , function() { 

    it("M1", function(done) {
        superagent.get('http://dummy.restapiexample.com/api/v1/employees')
        .then((res:any)=> {
            console.log(res.body.status)
            expect(res.statusCode).to.equal(201);
            // expect(res.statusCode).to.equal(200);
            done();
        })
        .catch(done);
    })


it("M2", function(done){
    superagent.get('http://dummy.restapiexample.com/api/v1/employees').end((err:any, res:any) => {
        expect(res.statusCode).to.exist;
        expect(res.status).to.equal(201);
        console.log(res.body.status)
        console.log(err)
        done();
    });
});


it("M3", function(done){
    superagent.get('http://dummy.restapiexample.com/api/v1/employees').then((res:any)=> {
        this.timeout(5000);
        expect(res.statusCode).to.exist;
        expect(res.status).to.equal(201);
        console.log(res.body.status)
        done();
    })
    .catch(done);
});
})


