function showHarga1() {
  var harga1 = document.getElementById("harga2").textContent;
  alert(harga1);
}
document.getElementById("btn2").onclick = function () {
  var harga2 = document.getElementById("harga3").textContent;
  alert(harga2);
};
document.getElementById("bnt3").onclick = function () {
  var harga3 = document.getElementById("harga1").textContent;
  alert(harga3);
};

function goToBooking() {
  window.location.assign("bookingform.html");
}

function process() {
  var package = document.getElementById("package").value;
  console.log(package);
  var num_of_people = document.getElementById("num-of-people").value;
  console.log(num_of_people);
  var totalPayment = package * num_of_people;
  console.log(totalPayment);

  document.getElementById("total").textContent = totalPayment;
  setTimeout(() => {
    alert("Thank you!");
    window.location.assign("about.html");
  }, 3000);
}


