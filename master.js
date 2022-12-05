var Links = {
  setColor: function(color) {
    var alist = document.querySelectorAll('a');
      var i = 0;
      while (i < alist.length) {
        alist[i].style.color = color;
        i = i + 1;
      }
  }
};

var Body = {
  setBGColor: function(color) {
    document.querySelector('body').style.backgroundColor = color;
  },
  setColor: function(color) {
    document.querySelector('body').style.color = color;
  }
};

function linkSetColor(color) {
  var alist = document.querySelectorAll('a');
  var i = 0;
  while (i < alist.length) {
    alist[i].style.color = color;
    i = i + 1;
  }
}


function bodySetColor(color) {
  document.querySelector('body').style.color = color;
}

function bodySetBGColor(color) {
  document.querySelector('body').style.backgroundColor = color;
}

function nightDayHandler(self) {
  var target = document.querySelector('body');

  if (self.value == 'night') {
    bodySetBGColor('black');
    bodySetColor('white');
    self.value = 'day';

    linkSetColor('powderblue')

  } else {
    bodySetBGColor('white');
    bodySetColor('black');
    self.value = 'night';

    linkSetColor('blue');
  }
}
