// write your sleepIn function in src/intro.js
describe('sleepIn', function(){

  // this is a spec
  it('returns true for Saturday', function(){
    expect( sleepIn('Saturday') ).toBe(true);
  });

  it('returns true for Sunday', function(){
    expect( sleepIn('Sunday') ).toBe(true);
  });

  xit('returns false for Monday', function(){
    expect( sleepIn('Monday') ).toBe(false);
  });

  xit('returns false for any work day', function(){
    var workday = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    var randomNumber = Math.floor(Math.random() * workday.length)
    var randomWorkday = workday[randomNumber];
    expect( sleepIn(randomWorkday) ).toBe(false);
  });

});

xdescribe('pluralize', function(){
  var list;
  it('turns an array into a comma separated string', function(){
    list = ['lions', 'tigers', 'bears'];
    expect( pluralize(list) ).toEqual( "lions, tigers and bears" );
  });
  it("works on any array of strings", function(){
    list = ['doritos', 'apples', 'candy', 'cheetos'];
    expect( pluralize(list) ).toEqual( "doritos, apples, candy and cheetos");

  });
});

xdescribe('prettyTime', function(){
  var seconds;
  it('converts seconds into a formatted string', function(){
    seconds = 120;
    expect( prettyTime(seconds) ).toEqual( "2 hours" );
  });
  it('handles minutes correctly', function(){
    seconds = 165;
    expect( prettyTime(seconds) ).toEqual( "2 hours and 45 minutes");
  });
  it('handles 1 hour correctly', function() {
    seconds = 60;
    expect( prettyTime(seconds) ).toEqual( "1 hour" );
  });
  it('handles 1 second correctly', function(){
    seconds = 61;
    expect( prettyTime(seconds) ).toEqual( "1 hour and 1 minute");
  });
});
