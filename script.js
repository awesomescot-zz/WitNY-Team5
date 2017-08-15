var today = new Date();
var date = today.getDate();
var year = today.getFullYear();

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var month = monthNames[today.getMonth()];

today = month + ' ' + date + ', ' + year;
document.getElementById('date').innerHTML = today;
