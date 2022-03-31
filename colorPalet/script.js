






var dropDown = document.getElementById("colors-array-select");

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    
    
  }


  function generateColors() {
    dropDown, getRandomColor();
  }

var card = document.querySelectorAll('.card');
for (var i = 0; i < card.length; i++) {
    card[i].addEventListener('click', function() {
        var current = document.getElementsByClassName('selected');
        if (current.length > 0) { 
            current[0].className = current[0].className.replace(' selected', '');
        }
        this.className += ' selected';
    });
}


  function generateColors() {
    var colors = [];
    while(colors.length < 10){
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        if(colors.indexOf(randomColor) === -1) colors.push(randomColor);
    }
    var select = document.getElementById("colors-array-select"); 

    select.innerHTML = "";
    for(var i = 0; i < colors.length; i++) {
        var opt = colors[i];
        select.innerHTML += "<option value=\"" + opt + "\">" + '#' + opt + "</option>";
    }
};


function addSelectedColorToPalette(){
  var selected = document.getElementsByClassName('selected');
  if (selected.length > 0) { 
      var select = document.getElementById('colors-array-select');
      var opt;
      
      for ( var i = 0, len = select.options.length; i < len; i++ ) {
          opt = select.options[i];
          if ( opt.selected === true ) {
              //console.log(select.value);
              //console.log('#' + select.value);
              var addColor = '#' + select.value;
              document.querySelector('.card.selected .mb-4').style.background = addColor;
          }
      }
      
  } else{
      alert('select a card');
  }
};

function chooseCard(){
  var card = document.querySelectorAll('.card');
  for (var i = 0; i < card.length; i++) {
      card[i].addEventListener('click', function() {
          var selected = document.getElementsByClassName('selected');
          if (selected.length > 0) { 
              selected[0].className = selected[0].className.replace(' selected', '');
          }
          this.className += ' selected';
      });
  }
};


function resetColor_triger(){
  //just test
  document.querySelector('.card.selected .mb-4').style.background = 'transparent';
};

function resetColor() {
  setTimeout('resetColor_triger()', 100);
}
