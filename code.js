function myFunction() {
  const text = document.createElement("input");
  text.value = document.getElementById("chore").value;

  if (text.value == "" || text.value == undefined) {
    document.getElementById("empty").innerHTML = "Cannot create empty chores!!!!";
  } else {
    document.getElementById("empty").innerHTML = "";
    text.readOnly = true;

    const btn1 = document.createElement("button");
    btn1.innerHTML = "Edit";

    const btn2 = document.createElement("button");
    btn2.innerHTML = "Finished";

    const btn3 = document.createElement("button");
    btn3.innerHTML = "Delete";

    btn1.addEventListener("click", editFunction);
    function editFunction() {
      if (btn1.innerHTML === "Edit") {
        text.readOnly = false;
        btn1.innerHTML = "Save";
      } else {
        text.readOnly = true;
        btn1.innerHTML = "Edit";
      }
    }

    btn3.addEventListener("click", remove);
    function remove() {
      document.getElementById("myList").removeChild(x);
    }

    btn2.addEventListener("click", doneFunction);
    function doneFunction() {
      var y = document.createElement("LI");
      y.appendChild(text);
      y.appendChild(btn1);
      y.appendChild(btn3);
      document.getElementById("myList2").appendChild(y);
      document.getElementById("myList").removeChild(x);

      btn3.addEventListener("click", removeFinished);
      function removeFinished() {
        document.getElementById("myList2").removeChild(y);
      }
    }

    var x = document.createElement("LI");
    x.appendChild(text);
    x.appendChild(btn1);
    x.appendChild(btn2);
    x.appendChild(btn3);
    document.getElementById("myList").appendChild(x);
  }
}

function reset() {
  const removeList = document.getElementById("myList");
  removeList.remove();
  const removeList2 = document.getElementById("myList2");
  removeList2.remove();
  document.getElementById("refresh").innerHTML = "Refresh Page!!!!!";
}
