const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();
const expect = chai.expect;
chai.use(chaiHttp);

// describe('post request to sell data with all fields', () => { 
//     it('it should successfully post the crypto and quantity to backend and receive a http 200 status code', (done) => {
//         const test_sell = {
//             crypto: "test",
//             quantity: 10,
//         }
//         chai.request(server) 
//         .post('/sell') 
//         .send(test_sell)
//         .end((err, res) => { 
//             res.should.have.status(200); 
//             res.body.should.be.a("object") 
//             res.body.should.have.property("success")
//             res.body.success.should.eql(true) 
//             res.body.message.should.eql("sell data post success") 
//             done() 
//         })
//     })
// })


describe('post request to sell data with empty fields', () => { 
    it('it should successfully post the empty crypto and quantity to backend and receive a http 400 status code', (done) => {
        const test_sell = {
            crypto: "",
            quantity: "",
        }
        chai.request(server) 
        .post('/sell') 
        .send(test_sell)
        .end((err, res) => {
            res.body.should.be.a("object") 
            expect(res).to.have.status(400)
            done() 
        })
    })
})
