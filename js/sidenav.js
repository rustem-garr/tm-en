function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function terjimesi() {
  const collection = document.getElementsByClassName("tm");
  const btn = document.getElementById("btnTranslate");
  if (btn.innerHTML == "Terjimesini görkez") {
    for (let i = 0; i < collection.length; i++) {
      collection[i].style.display = "block";
    }
    btn.style.color="red"
    btn.innerHTML = "Terjimesini gizle";
  } else {
    for (let i = 0; i < collection.length; i++) {
      collection[i].style.display = "none";
    }
    btn.innerHTML = "Terjimesini görkez";    
    btn.style.color = "black";
  }
}
