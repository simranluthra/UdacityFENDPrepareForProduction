import { expect } from 'chai';
import { shuffle } from '../src/shuffle.js';

describe('shuffle function', () => {
  it('should shuffle the indexes of the array', () => {
    const originalArray = ['A', 'B', 'C', 'D'];
    const shuffledArray = shuffle(originalArray);

    // Check that the shuffled array is not the same as the original array
    expect(shuffledArray).to.not.eql(originalArray);

    // Check that the shuffled array contains the same elements
    expect(shuffledArray.sort()).to.eql(originalArray.sort());
  });
});