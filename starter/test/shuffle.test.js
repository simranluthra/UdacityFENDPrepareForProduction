import { expect } from 'chai';
import { shuffle } from '../src/shuffle.js';
import { cardSets } from '../data/data.js';

describe('shuffle function', () => {
  const originalCards = cardSets[0].cards; 
  const termsOnly = (arr) => arr.map(card => card.term).sort();

  it('should return a new array of same length', () => {
    const result = shuffle(originalCards);
    expect(result).to.be.an('array');
    expect(result.length).to.equal(originalCards.length);
  });

  it('should contain all the same cards (by term)', () => {
    const result = shuffle(originalCards);
    expect(termsOnly(result)).to.eql(termsOnly(originalCards));
  });


});
