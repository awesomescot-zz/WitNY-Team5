var today = new Date();
var date = today.getDate();
var year = today.getFullYear();
var time = today.toLocaleString('en-US', { hour: 'numeric',minute:'numeric', hour12: true });

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

var month = monthNames[today.getMonth()];
var day = dayNames[today.getDay()];

today = month + ' ' + date + ', ' + year;
document.getElementById('day').innerHTML = day;
document.getElementById('date').innerHTML = today;
document.getElementById('time').innerHTML = time;

$('.carousel').carousel({
  interval: 2000
})

function func() {
  document.getElementById("elderImg").src="images/elders2.png";
};
