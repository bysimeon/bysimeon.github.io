var backgrounds = [
  ['linear-gradient(to right, #c9d6ff, #e2e2e2)', '-webkit-linear-gradient(to right, #c9d6ff, #e2e2e2)'],
  ['#08AEEA', 'linear-gradient(to left, #e2e2e2 0%, #2AF598 100%)'],
  ['linear-gradient(to left, #d6ae7b, #eacda3)','linear-gradient(to left, #d6ae7b, #eacda3)'],
  ['#fff', '#fff']
]
//
var curr = 0;
var curr = localStorage.getItem('curr');
//
function nextbackground() {
  document.body.style.background = backgrounds[curr%backgrounds.length][0];
  document.body.style.backgroundImage = backgrounds[curr%backgrounds.length][1];
  localStorage.setItem('back1', backgrounds[curr%backgrounds.length][0]);
  localStorage.setItem('back2', backgrounds[curr%backgrounds.length][1]);
  curr++;
  localStorage.setItem('curr', curr);
}

window.onload = () => {
  document.body.style.background = localStorage.getItem('back1');
  document.body.style.background = localStorage.getItem('back2');
}
