var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var content = document.querySelector('.carousel').children;
var totalspan = content.length;
var index = 0;

prev.addEventListener('click', () => {
  nextslide('next');
})

next.addEventListener('click', () => {
  nextslide('prev');
})

function nextslide(direction) {
  if(direction == 'next') {
    index++;
    if(index == totalspan) {
      index = 0;
    }
  } else {
    if(index == 0) {
      index = totalspan - 1;
    } else {
      index--;
    }
  }

  for(var i = 0; i < content.length; i++) {
    content[i].classList.remove('main');
  }
  content[index].classList.add('main');
}

function navMenuOpen() {
    var element = document.getElementById("nav_menu");
    var menu_btn = document.getElementById("menu_open");
    element.classList.toggle("header__menu--open");
    menu_btn.classList.toggle("header__right--menu_btn_close");
}