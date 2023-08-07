const toggleMenu = () => {
  if (menuButtonEl.classList.contains('active')) {
    menuButtonEl.classList.remove('active')
    navEl.classList.remove('active')
    headerWrapEl.classList.remove('active')
  } else {
    menuButtonEl.classList.add('active')
    navEl.classList.add('active')
    headerWrapEl.classList.add('active')
  }
}

menuButtonEl.addEventListener('click', toggleMenu)
