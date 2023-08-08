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

const scrollEventHandler = () => {
  const e = manybookSectionEl && manybookSectionEl.getBoundingClientRect().top
  headerLogoEl.textContent = e < 50 ? 'M' : '밀리의 서재'
}

menuButtonEl.addEventListener('click', toggleMenu)
window.addEventListener('scroll', scrollEventHandler)
