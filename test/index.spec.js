const mocha = require('mocha');
const expect = require('chai').expect
const app = require('../index.js');




describe('if application works', ()=>{

    it('should say if app exists', ()=>{

        expect(app).to.exist

    })
})