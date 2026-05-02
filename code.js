function makeIcon(ch) {
  var s = document.createElement('span');
  s.textContent = ch;
  return s;
}

function myFunction() {
  var inp = document.getElementById('chore');
  if (inp.value.trim() === '') {
    document.getElementById('empty').textContent = 'INPUT CANNOT BE EMPTY';
    return;
  }
  document.getElementById('empty').textContent = '';
  document.getElementById('refresh').textContent = '';

  var text = document.createElement('input');
  text.value = inp.value.trim();
  text.readOnly = true;

  var btn1 = document.createElement('button');
  btn1.className = 'btn-edit';
  var ic1 = makeIcon('✎');
  btn1.appendChild(ic1);
  btn1.title = 'Edit';

  var btn2 = document.createElement('button');
  btn2.className = 'btn-done';
  btn2.appendChild(makeIcon('✓'));
  btn2.title = 'Done';

  var btn3 = document.createElement('button');
  btn3.className = 'btn-del';
  btn3.appendChild(makeIcon('✕'));
  btn3.title = 'Delete';

  var x = document.createElement('LI');

  btn1.addEventListener('click', function () {
    if (text.readOnly) {
      text.readOnly = false;
      text.focus();
      ic1.textContent = '✔';
      btn1.title = 'Save';
    } else {
      text.readOnly = true;
      ic1.textContent = '✎';
      btn1.title = 'Edit';
    }
  });

  btn3.addEventListener('click', function () {
    if (x.parentNode) x.parentNode.removeChild(x);
  });

  btn2.addEventListener('click', function () {
    var y = document.createElement('LI');
    y.appendChild(text);
    y.appendChild(btn1);
    y.appendChild(btn3);
    document.getElementById('myList2').appendChild(y);
    if (x.parentNode) x.parentNode.removeChild(x);
    btn3.addEventListener('click', function () {
      if (y.parentNode) y.parentNode.removeChild(y);
    });
  });

  x.appendChild(text);
  x.appendChild(btn1);
  x.appendChild(btn2);
  x.appendChild(btn3);
  document.getElementById('myList').appendChild(x);
  inp.value = '';
  inp.focus();
}

function reset() {
  document.getElementById('myList').innerHTML = '';
  document.getElementById('myList2').innerHTML = '';
  document.getElementById('refresh').textContent = 'ALL TASKS CLEARED';
  document.getElementById('empty').textContent = '';
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('chore').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') myFunction();
  });
});
