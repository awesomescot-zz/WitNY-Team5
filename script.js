var today = new Date();
var dd = today.getDate();
var mm = today.getMonth();
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.getElementById('date').innerHTML = today;
