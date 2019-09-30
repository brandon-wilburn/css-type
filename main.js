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

  var offsetLength = Math.round(Math.random() * 1);
  if (offsetLength==0) {
    oL = oL/2;
    // offsetLength=1;
  } else {
    oL = oL/4
    // offsetLength=2;
  }
  // console.log(offsetLength);

  // oL = oL/4;

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

  var tron = anime({
    targets: pathEl,
    strokeDashoffset: [0, length],
    // strokeDasharray: [array, 0],
    duration: anime.random(1000, 5000),
    delay: anime.random(0, 1000),
    // duration: 5000,
    // delay: 0,
    loop: true,
    direction: 'linear',
    easing: 'easeOutQuint',
    autoplay: false
  });
}

// function yell() {
//   console.log("HOVERED");
// }

// var svgs = document.querySelectorAll('.svgContainer');

// for (var i = 0; i < imgs.length; i++) {
//   svgs[i].onclick = toggleAnimation;
//   svgs[i].style.webkitAnimationPlayState = 'running';
// }

// function toggleAnimation() {
//   var style;
//   for (var i = 0; i < imgs.length; i++) {
//     style = svg[i].style;
//     if (style.webkitAnimationPlayState === 'running') {
//       style.webkitAnimationPlayState = 'paused';
//       document.body.className = 'paused';
//     } else {
//       style.webkitAnimationPlayState = 'running';
//       document.body.className = '';
//     }
//   }
// }

document.querySelector('#controls .play').onclick = function playEm() {
  for (var i = 0; i < pathEls.length; i++) {
    var pathEl = pathEls[i];
    tron.play;
    console.log(pathEls[i]);

  }
}

document.querySelector('#controls .pause').onclick = function pauseEm() {
  for (var i = 0; i < pathEls.length; i++) {
   pathEls[i].tron.pause;
  }
}
  // document.querySelectorAll('.svgContainer').onmouseover = yell();

  // document.querySelectorAll('#svgContainer').onmouseover = tron.play;
  // document.querySelectorAll('svg').onmouseover = tron.pause;

