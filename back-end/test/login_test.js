const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();
chai.use(chaiHttp);

describe('post request to login page with all fields', () => { 
    it('it should successfully post the username and password to backend and receive a http 200 status code', (done) => {
        const test_user = {
            user_name: "test",
            password: "test",
        }
        chai.request(server) 
        .post('/login') 
        .send(test_user)
        .end((err, res) => { 
            res.should.have.status(200); 
            res.body.should.be.a("object") 
            res.body.should.have.property("success")
            res.body.should.have.property("message") 
            res.body.success.should.eql(true) 
            res.body.message.should.eql("login success") 
            done() 
        })
    })
})


describe('post request to login page with empty fields', () => { 
    it('it should successfully post the empty username and password to backend and receive a http 400 status code', (done) => {
        const test_user = {
            user_name: "",
            password: "",
        }
        chai.request(server) 
        .post('/login') 
        .send(test_user)
        .end((err, res) => { 
            res.should.have.status(400); 
            res.body.should.be.a("object") 
            res.body.should.have.property("success")
            res.body.should.have.property("message") 
            res.body.success.should.eql(false) 
            res.body.message.should.eql("At least one field is empty") 
            done() 
        })
    })
})
