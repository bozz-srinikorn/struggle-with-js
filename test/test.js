const app = require('../index')
const chaiHttp = require('chai-http')
const chai = require('chai');
const {after, before, describe, it} = require('mocha')

const expect = chai.expect;

chai.use(chaiHttp)
chai.should()

describe('Testing unit 1', () => {
  before(done => {
    // Do something here before test
    done()
  })

  describe('GET /', () => {
    it('it should have message hello bozz', done => {
      chai
        .request(app)
        .get('/bozz')
        .end((e, res) => {
          expect(res.statusCode).to.equal(200)
          expect(res.body).to.equal('hello bozz') 
          done()
        })
    })
  })

  describe('POST /api/restaurants', () => {
    it('it should insert new message to restaurants data', done => {
      chai
        .request(app)
        .post('/api/restaurants')
        .send({
            id : 99,
            name:"Baba",
            imageURL:"https://d1sag4ddilekf6.cloudfront.net/Merchants/3-CZDCKFBBNX6WJE/photos/46fb35b467bf4a938698eaee18cbe361_1600007791868188225.jpeg",
            type:"Partner, Fast eiei Food"}
        )
        .end((e, res) => {
          expect(res.statusCode).to.equal(200)
          expect(res.body.id).to.equal(99)
          expect(res.body.name).to.equal('Baba') 
          expect(res.body.imageURL).to.equal('https://d1sag4ddilekf6.cloudfront.net/Merchants/3-CZDCKFBBNX6WJE/photos/46fb35b467bf4a938698eaee18cbe361_1600007791868188225.jpeg') 
          expect(res.body.type).to.equal('Partner, Fast eiei Food')  
          done()
        })
    })
  })

  describe('GET /api/restaurants/99', () => {
    it('it should have message of restaurants data', done => {
      chai
        .request(app)
        .get('/api/restaurants/99')
        .end((e, res) => {
          expect(res.statusCode).to.equal(200)
          expect(res.body.id).to.equal(99)
          expect(res.body.name).to.equal('Baba') 
          expect(res.body.imageURL).to.equal('https://d1sag4ddilekf6.cloudfront.net/Merchants/3-CZDCKFBBNX6WJE/photos/46fb35b467bf4a938698eaee18cbe361_1600007791868188225.jpeg') 
          expect(res.body.type).to.equal('Partner, Fast eiei Food')  
          done()
        })
    })
  })
  
  after(done => {
    // Do something here after test
    done()
  })
})