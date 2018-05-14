describe('ChangeGenerator', function() {
  let cg = new ChangeGenerator('£1', '80p');
  
  describe('.change', function() {
    
    describe('when given £1', function() {

      it('returns `1 x 20p`', function() {
        expect(cg.change).toEqual('1 x 20p');
      });
    });
  })

  describe('.turnToNumber', function() {
    it('returns the number 100 when give the string 100', function() {
      expect(cg.turnToNumber('£1')).toEqual(100);
    });
  });
});