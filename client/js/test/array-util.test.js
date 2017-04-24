const {getRange, getLetterRange} = require('../array-util');

describe('array_util', () => {

  describe('get-range', () => {
    it('produces a range starting with 0', () => {
      expect(getRange(0, 5)).toEqual([0, 1, 2, 3, 4, 5]);
    });

    it('produces a range starting with 1', () => {
      expect(getRange(1, 5)).toEqual([1,2,3,4,5]);
    });

    it('produces a range of negative numbers', () => {
      expect(getRange(-5, -1)).toEqual([-5,-4,-3,-2,-1]);
    });

    it('produces a range of negative and positive numbers', () => {
      expect(getRange(-5, 5)).toEqual([-5,-4,-3,-2,-1,0,1,2,3,4,5]);
    });
  });
  describe('get-letter-range', () => {
    it('produces a 1 letter Range', () => {
      expect(getLetterRange('W', 1)).toEqual(['W']);
    });

    it('produces a valid range starting with A', () => {
      expect(getLetterRange('A', 5)).toEqual(['A','B','C','D','E']);
    });

    it('produces a valid range starting with B', () => {
      expect(getLetterRange('B', 5)).toEqual(['B','C','D','E','F']);
    })
  });
});
