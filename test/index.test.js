const doit = require('../');

describe('number to center', () => {
  describe('given a good odd-digit number', () => {
    it('should find the middle three', () => {
      expect(doit(123456789)).toBe(456);
    });
  });

  describe('given a odd-digit string number', () => {
    it('should find the middle three', () => {
      expect(doit('12345')).toBe(234);
    });
  });

  describe('given an even-digit number', () => {
    it('should return null', () => {
      expect(doit(1234)).toBe(null);
    });
  });

  describe('given a non-number string', () => {
    it('should return null', () => {
      expect(doit('1234Bloop')).toBe(null);
    });
  });

  describe('given a number with fewer than 3 digits', () => {
    it('should return null', () => {
      expect(doit(2)).toBe(null);
    });
  });
});
