describe('ChangeGenerator', function() {
  
  describe('.change', function() {
    
    describe('when given £1', function() {
      let cg = new ChangeGenerator('£1', '80p');

      it('returns `1 x 20p`', function() {
        expect(cg.change).toEqual('1 x 20p');
      });
    });
  })
});