'use strict';
const chai = require('chai');
const ab = require('../dist/main');

const expect = chai.expect;

describe('ab fn test', () => {
  let c = {
    hits: 300,
    conversions: 100
  }
  let t = {
    hits: 300,
    conversions: 150
  }
  it('test conversion rate', function(){
    expect(ab.cr(t)).to.be.equal(t.conversions/t.hits)
  })

  let zScore = ab.calcZScore(c, t);

  it('test calculation of score', function(){
    expect(zScore).to.be.equal(4.2008402520840304)
  })

  it('test Calculate the Cumulative Normal Distribtion', function(){
    expect(ab.cumNorDist(zScore)).to.be.equal(0.9999866953636605)
  })
})

describe('ab sample size', () => {
  it('worse', function(){
    expect(parseInt(ab.sampleSize(0.05)[0])).to.be.equal(1167)
  })
  it('good', function(){
    expect(parseInt(ab.sampleSize(0.05)[1])).to.be.equal(3243)
  })
  it('best', function(){
    expect(parseInt(ab.sampleSize(0.05)[2])).to.be.equal(29195)
  })
})
