
/**
 * Dependencies.
 */

if ('undefined' != typeof require) {
  expect = require('expect.js');
  ms = require('../');
}

// Default lang strings

describe('ms(string)', function(){
  it('should preserve ms', function () {
    expect(ms('100')).to.be(100);
  });

  it('should convert from m to ms', function () {
    expect(ms('1m')).to.be(60000);
  });

  it('should convert from h to ms', function () {
    expect(ms('1h')).to.be(3600000);
  });

  it('should convert d to ms', function () {
    expect(ms('2d')).to.be(172800000);
  });

  it('should convert s to ms', function () {
    expect(ms('1s')).to.be(1000);
  });

  it('should convert ms to ms', function () {
    expect(ms('100ms')).to.be(100);
  });

  it('should work with decimals', function () {
    expect(ms('1.5h')).to.be(5400000);
  });

  it('should return NaN if invalid', function () {
    expect(isNaN(ms('☃'))).to.be(true);
  });

  it('should be case-insensitive', function () {
    expect(ms('1.5H')).to.be(5400000);
  });

  it('should work with numbers starting with .', function () {
    expect(ms('.5ms')).to.be(.5);
  });
})

// Default lang numbers

describe('ms(number)', function(){
  it('should support milliseconds', function(){
    expect(ms(500)).to.be('500 ms');
  })

  it('should support seconds', function(){
    expect(ms(1000)).to.be('1 second');
    expect(ms(1500)).to.be('1.5 seconds');
    expect(ms(10000)).to.be('10 seconds');
  })

  it('should support minutes', function(){
    expect(ms(60 * 1000)).to.be('1 minute');
    expect(ms(60 * 1500)).to.be('1.5 minutes');
    expect(ms(60 * 10000)).to.be('10 minutes');
  })

  it('should support hours', function(){
    expect(ms(60 * 60 * 1000)).to.be('1 hour');
    expect(ms(60 * 60 * 1500)).to.be('1.5 hours');
    expect(ms(60 * 60 * 10000)).to.be('10 hours');
  })

  it('should support days', function(){
    expect(ms(24 * 60 * 60 * 1000)).to.be('1 day');
    expect(ms(24 * 60 * 60 * 1500)).to.be('1.5 days');
    expect(ms(24 * 60 * 60 * 10000)).to.be('10 days');
  })
})

// pt-br lang numbers

describe('ms(number)', function(){
  it('deve suportar milisegundos', function(){
    expect(ms(500, 'pt-br')).to.be('500 ms');
  })

  it('deve suportar segundos', function(){
    expect(ms(1000,'pt-br')).to.be('1 segundo');
    expect(ms(1500,'pt-br')).to.be('1.5 segundos');
    expect(ms(10000,'pt-br')).to.be('10 segundos');
  })

  it('deve suportar minutos', function(){
    expect(ms(60 * 1000,'pt-br')).to.be('1 minuto');
    expect(ms(60 * 1500,'pt-br')).to.be('1.5 minutos');
    expect(ms(60 * 10000,'pt-br')).to.be('10 minutos');
  })

  it('deve suportar horas', function(){
    expect(ms(60 * 60 * 1000,'pt-br')).to.be('1 hora');
    expect(ms(60 * 60 * 1500,'pt-br')).to.be('1.5 horas');
    expect(ms(60 * 60 * 10000,'pt-br')).to.be('10 horas');
  })

  it('deve suportar dias', function(){
    expect(ms(24 * 60 * 60 * 1000,'pt-br')).to.be('1 dia');
    expect(ms(24 * 60 * 60 * 1500,'pt-br')).to.be('1.5 dias');
    expect(ms(24 * 60 * 60 * 10000,'pt-br')).to.be('10 dias');
  })
})