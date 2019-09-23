var pathEls = document.querySelectorAll('path');
// console.log(pathEls);

for (var i = 0; i < pathEls.length; i++) {
  var pathEl = pathEls[i];
  var length = pathEl.getTotalLength();
  var oL = length;
  var cR;
  // console.log(length)
  // var offset = anime.setDashoffset(pathEl) - 1;
  // var array = anime.setStrokedasharray(pathEl);
  // pathEl.setAttribute('stroke-dashoffset', length/2);

  // var offsetLength = Math.round(Math.random() * 2);
  // if (offsetLength==0) {
  //   oL = oL/2;
  //   // offsetLength=1;
  // } else if (offsetLength==1) {
  //   oL = oL/8
  //   // offsetLength=2;
  // } else {
  //   oL = oL/16
  //   // offsetLength=3;
  // }

  oL = oL/2;

  var colorR = Math.round(Math.random() * 2);
   if (colorR==0) {
    cR = "#08b5f2";
    // offsetLength=1;
  } else if (colorR==1) {
    cR = "#f7941d";
    // offsetLength=2;
  } else {
    cR = "#ec008c";
    // offsetLength=3;
  }

  pathEl.setAttribute('stroke-dasharray', oL);
  pathEl.setAttribute('stroke', cR);

  anime({
    targets: pathEl,
    strokeDashoffset: [0, length],
    // strokeDasharray: [array, 0],
    duration: anime.random(2000, 5000),
    delay: anime.random(0, 1000),
    // duration: 5000,
    // delay: 0,
    loop: true,
    direction: 'linear',
    easing: 'easeOutQuint',
    autoplay: true
  });

}