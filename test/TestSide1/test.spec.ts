let chaiJs = require("chai");
let chaiHttp = require("chai-http")
chaiJs.use(chaiHttp);
import { expect } from "chai"
import { getUrl , dataConfig } from "./../../nodeEnvironment.env"



describe('Test connectivity', ()=> {
    it('Test Connectivity' ,(done)=>{
        console.log(getUrl() + " This is ENV" + "Passowrd " + dataConfig.Users.password )
        chaiJs.request(getUrl())
        .get('/api/v1/employees')
        .end( (err:any,res:any) => {
            expect(res.status).to.equal(200);
            console.log(res.body.status)
            // console.log(res.body.data)
           
            done();
        });
    })
})