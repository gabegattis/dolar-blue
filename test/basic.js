var assert = require("assert")
var dolarblue = require('../lib/dolar-blue');

describe('exchange rates', function(){
  this.timeout(5000);
  
  
  describe('getData', function(){

    
    it('should return current dolar blue BUY and SELL rate, and a datetime', function(done){
      dolarblue.getData(function(err, data) {
        assert.ok(!err);
        assert.ok( data.buy > 0);
        assert.ok( data.sell > 0);


        var d = data.datetime;
        assert.ok( d > new Date(0) );
        var before =  new Date('2013-12-16 18:00:00');
        assert.ok( d > before);
        done();
      });
    });
  });

  describe('getData({src:LaNacion})', function(){
    it('should return current dolar blue BUY and SELL rate, and a datetime', function(done){
      dolarblue.getData({src:'LaNacion'}, function(err, data) {
        assert.ok(!err);
        assert.ok( data.buy > 0);
        assert.ok( data.sell > 0);


        var d = data.datetime;
        assert.ok( d > new Date(0) );
        var before =  new Date('2013-12-16 18:00:00');
        assert.ok( d > before);
        done();
      });
    });
  });

  describe('getData({src:Bluelytics})', function(){
    it('should return current dolar blue BUY and SELL rate, and a datetime', function(done){
      dolarblue.getData({src:'Bluelytics'}, function(err, data) {
        assert.ok(!err);
        assert.ok( data.buy > 0);
        assert.ok( data.sell > 0);


        var d = data.datetime;
        assert.ok( d > new Date(0) );
        var before =  new Date('2013-12-16 18:00:00');
        assert.ok( d > before);
        done();
      });
    });
  });


  describe('getData({src:ERROR})', function(){
    it('should throw error', function(done){
      dolarblue.getData({src:'ERROR'}, function(err, data) {
        assert.ok(err === 'Unknown source provided: ERROR');
        assert.ok(!data);
        done();
      });
    });
  });


});



