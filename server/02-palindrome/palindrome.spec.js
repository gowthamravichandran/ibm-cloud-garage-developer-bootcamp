describe('the palindrome canary spec', () => {
  it('shows the infrastructure works', () => {
      true.should.be.true();
    });

  function isPalindrome(text) {
    return text.split('').reverse().join('') === text;
  }
  describe('a palindrome', () => {
    it('is a RACECAR', () => {
      isPalindrome('RACECAR').should.equal(true);
    });
    it('is a RADAR', () => {
      isPalindrome('RADAR').should.equal(true);
    });
    it('is not RACECARS', () => {
      isPalindrome('RACECARS').should.equal(false);
    });
    it('is not RACE CAR', () => {
      isPalindrome('RACE CAR').should.equal(false);
    });
    it('is not ""', () => {
      isPalindrome('').should.equal(false);
    });
    it('is not  "   "', () => {
      isPalindrome('   ').should.equal(false);
    });
  });
});
