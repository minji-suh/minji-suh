function updateTransition() {
  var el = document.getElementById("name");
   
  if (el.className=="name") {
    el.innerHTML = "ㅅㅁㅈ";
    el.className += " name2";
  } else if (el.className=="name name2"){
    el.className += " logo";
    el.innerHTML = "";
  } else {
    el.className = "name";  
    el.innerHTML = "서민지";
  }
//  return el;
}


var intervalID = window.setInterval(updateTransition, 2000);