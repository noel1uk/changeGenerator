describe('ChangeGenerator', function() {
  
  describe('.change', function() {
    
    describe('when given £1', function() {

      beforeEach(function() {
        cg = new ChangeGenerator('£1', '80p');
      })

      it('returns `1 x 20p`', function() {
        expect(cg.change).toEqual('1 x 20p');
      });

      describe('.turnToNumber', function() {
        // let cg = new ChangeGenerator('£1', '80p');
    
        it('returns the number 100 when give the string £1', function() {
          expect(cg.turnToNumber('£1')).toEqual(100);
        });
      });
    });
  })
  
});