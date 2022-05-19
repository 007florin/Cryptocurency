function incredientsHover() {
  document.get.ElementById('incredients').firstElementChild.firstElementChild.style.FontSize = "300%";
}
function incredientsNormal() {
  document.getElementById('incredients').firstElementChild.firstElementChild.style.FontSize = "100%";
}
function preparationHover() {
  document.get.ElementById('preparation').firstElementChild.firstElementChild.style.FontSize = "300%";
}
function preparationNormal() {
  document.getElementById('preparation').firstElementChild.firstElementChild.style.FontSize = "100%";
}

function showTime() {
  document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function() {
  showTime();
}, 1000);
