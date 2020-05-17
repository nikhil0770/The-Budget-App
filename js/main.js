document.querySelector("#addb").addEventListener("click", addbuget);
document.querySelector("#adde").addEventListener("click", addexpense);
var bug;
var bl = false;
function addbuget() {
  bl = true;
  bug = document.getElementById("budget").value;
  if (bug == "") {
    alert("Enter a valid budget");
  } else {
    document.getElementById("upbug").innerHTML = bug;
    document.getElementById("upbug").style.color = "green";
    bal = bug - netexp;
    if (bal >= 0) {
      document.getElementById("upbal").innerHTML = bal;
      document.getElementById("upbal").style.color = "green";
    } else {
      document.getElementById("upbal").innerHTML = bal;
      document.getElementById("upbal").style.color = "red";
    }
  }
}
var netexp = 0;
var bal;
function addexpense() {
   if (bl == true) {
    var info = document.getElementById("expinfo").value;
    var exp = document.getElementById("expamt").value;
    netexp = netexp - -1 * exp;
    document.getElementById("upexp").innerHTML = netexp;
    document.getElementById("upexp").style.color = "red";
    bal = bug - netexp;
    if (bal >= 0) {
      document.getElementById("upbal").innerHTML = bal;
      document.getElementById("upbal").style.color = "green";
    } else {
      document.getElementById("upbal").innerHTML = bal;
      document.getElementById("upbal").style.color = "red";
    }
    updaterestable(info, exp);
    document.getElementById("expinfo").value = "";
    document.getElementById("expamt").value = "";
  } else {
    alert("Check if you have clicked on Add Budget");
  }
}
function updaterestable(info, exp) {
  var tb = document.getElementById("netres");
  var newrow = tb.insertRow(tb.length);
  var cell0 = newrow.insertCell(0);
  var cell1 = newrow.insertCell(1);
  var cell2 = newrow.insertCell(2);
  var cell3 = newrow.insertCell(3);

  cell0.innerHTML = info;
  cell1.innerHTML = exp;
  cell2.innerHTML = `<button id = 'edt' onclick ="edit(this)" class = "btn btn-primary";>Edit</button>`;
  cell3.innerHTML = `<button id = 'del' onclick ="dele(this)" class = "btn btn-danger";>Delete</button>`;
}
function dele(ob) {
  var f = ob.parentNode.parentNode;
  var x = f.cells[1].innerHTML;
  document.getElementById("upexp").innerHTML = netexp - x;
  document.getElementById("upbal").innerHTML = bal - -1 * x;
  if (bal >= 0) {
    document.getElementById("upbal").style.color = "green";
  } else {
    document.getElementById("upbal").style.color = "red";
  }
  f.parentNode.removeChild(f);
}
function edit(ob) {
  var f = ob.parentNode.parentNode;
  var earamt = f.cells[1].innerHTML;
  var xin;
  var xexp;
  xin = prompt("Enter your expense details.");
  xexp = prompt("Enter your expense amount.");
  f.cells[0].innerHTML = xin;
  f.cells[1].innerHTML = xexp;
  if (earamt >= xexp) {
    netexp = netexp - 1 * (earamt - xexp);
    bal = bal - (earamt - xexp);
    document.getElementById("upexp").innerHTML = netexp;
    document.getElementById("upbal").innerHTML = bal;
  } else {
    bal = bal - -1 * (earamt - xexp);
    netexp = netexp - (earamt - xexp);
    document.getElementById("upexp").innerHTML = netexp;
    document.getElementById("upbal").innerHTML = bal;
  }
  if (bal >= 0) {
    document.getElementById("upbal").style.color = "green";
  } else {
    document.getElementById("upbal").style.color = "red";
  }
}
window.onbeforeunload = function () {
  return false;
};
