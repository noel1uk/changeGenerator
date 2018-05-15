describe('ChangeGenerator', function() {
  
  describe('.change', function() {

    describe('when given 2p', function() {
      cg = new ChangeGenerator('2p', '1p');

      it('returns 1 x 1p', function() {
        expect(cg.change()).toEqual('1 x 1p');
      });
    });
    
    describe('when given £1 for an item that costs 80p', function() {

      beforeEach(function() {
        cg = new ChangeGenerator('£1', '80p');
      })

      it('returns `1 x 20p`', function() {
        expect(cg.change()).toEqual('1 x 20p');
      });

      describe('.turnToNumber', function() {
    
        it('returns the number 100 when give the string £1', function() {
          expect(cg.turnToNumber('£1')).toEqual(100);
        });
        
        it('returns the number 80 when given the string 80p', function() {
          expect(cg.turnToNumber('80p')).toEqual(80);
        });
      });
    });
    describe('when given 90p for an item that costs 80p', function() {
      beforeEach(function() {
        cg = new ChangeGenerator('90p', '80p')
      });

      it('returns `1 x 10p`', function() {
        expect(cg.change()).toEqual('1 x 10p');
      });
    });
  });
});