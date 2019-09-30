var pathEls = document.querySelectorAll('path');
<<<<<<< HEAD
=======
// console.log(pathEls);
>>>>>>> 286aeb9215f723afc6ced4bd4a7f8812926535f5

// Line CSS
for (var i = 0; i < pathEls.length; i++) {
  var pathEl = pathEls[i];
  var length = pathEl.getTotalLength();
  var oL = length;
  var cR;
<<<<<<< HEAD
=======
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
>>>>>>> 286aeb9215f723afc6ced4bd4a7f8812926535f5

  // Line Length
  var offsetLength = Math.round(Math.random() * 1);
  if (offsetLength<1) {
    oL = oL/2;
  } else {
    oL = oL/4
  }

  // Line color
  var colorR = Math.round(Math.random() * 2);
   if (colorR==0) {
    cR = "#e1a586";
  } else if (colorR==1) {
    cR = "#d74f6f";
  } else {
    cR = "#17a2af";
  }

  pathEl.setAttribute('stroke-dasharray', oL);
  pathEl.setAttribute('stroke', cR);
}

var cS = document.querySelectorAll('.letterBox');

// Animation
// Iterate through every letter container
for (var k = 0; k < cS.length; k++) {
  var chilldren = cS[k].querySelectorAll('path');
  for (var c = 0; c < chilldren.length; c++) {
    // Iterate through the paths of this container
    var thisP = chilldren[c];
    var thisL = thisP.getTotalLength();
    var tron = anime({
      targets: thisP,
      strokeDashoffset: [0, thisL],
      duration: anime.random(2000, 10000),
      delay: anime.random(0, 1000),
      loop: true,
      direction: 'linear',
      easing: 'easeOutQuint',
      easing: 'steps(50)',
      autoplay: true
    });
  }
}

<<<<<<< HEAD
// Mousing over on a container increases stroke-width of its child elements
var boxes = document.querySelectorAll('.svgContainer');
var container = document.querySelectorAll('.anim');
for (v = 0; v < boxes.length; v++) {
  boxes[v].addEventListener('mouseover', function(event) {
    var clickedElem = event.target;
    var theKidspt2 = clickedElem.querySelectorAll('path');
    $('.anim').css({
      "filter": "drop-shadow(0px 0px 5px rgba(226,214,191,0.2))"
    })
    for (h=0; h<theKidspt2.length; h++) {
      theKidspt2[h].setAttribute('stroke-width', '5px');
    }
  });
    boxes[v].addEventListener('mouseleave', function(event) {
    var clickedElem = event.target;
    var theKidspt2 = clickedElem.querySelectorAll('path');
    for (h=0; h<theKidspt2.length; h++) {
      theKidspt2[h].setAttribute('stroke-width', '1px');
      $('.anim').css({
      "filter": "none"
    })
    }
  });

}

var boxes = document.querySelectorAll('#splashContainer');
var container = document.querySelectorAll('#splash');
for (v = 0; v < boxes.length; v++) {
  boxes[v].addEventListener('mouseover', function(event) {
    var clickedElem = event.target;
    var theKidspt2 = clickedElem.querySelectorAll('path');
    $('#splash').css({
      "filter": "drop-shadow(0px 0px 5px rgba(226,214,191,0.2))"
    })
    for (h=0; h<theKidspt2.length; h++) {
      theKidspt2[h].setAttribute('stroke-width', '3px');
    }
  });
    boxes[v].addEventListener('mouseleave', function(event) {
    var clickedElem = event.target;
    var theKidspt2 = clickedElem.querySelectorAll('path');
    for (h=0; h<theKidspt2.length; h++) {
      theKidspt2[h].setAttribute('stroke-width', '1px');
      $('#splash').css({
      "filter": "none"
    })
    }
=======
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
>>>>>>> 286aeb9215f723afc6ced4bd4a7f8812926535f5
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

<<<<<<< HEAD
}
=======
>>>>>>> 286aeb9215f723afc6ced4bd4a7f8812926535f5
