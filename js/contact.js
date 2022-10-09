var logo = document.getElementById('logo');
var myDate = new Date();
var hrs = myDate.getHours();
var greet;
if(hrs < 12)
  greet = 'Good Morning !';
else if(hrs >= 12 && hrs <= 16)
  greet = 'Good Afternoon !';
else if (hrs >= 16 && hrs <= 24)
  greet = 'Good Evening !';

var typewriter = new Typewriter(logo,{

strings:[greet],

autoStart: true,
  loop: true,
    delay: 80,
    
  });  
