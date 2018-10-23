function mouseOver(tid,txt){
  document.getElementById(tid).innerHTML = txt;
  document.getElementById(tid).style.visibility = 'visible';
}

function mouseOut(tid){
  document.getElementById(tid).innerHTML = "";
  document.getElementById(tid).style.visibility = 'hidden';
}