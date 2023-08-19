import {headerLogoEl, headerWrapEl, manybookSectionEl, menuButtonEl, navEl} from './app.js'

const toggleMenu = () => {
  const elements = [menuButtonEl, navEl, headerWrapEl]
  elements.forEach((element) => element.classList.toggle('active'))
}

const scrollEventHandler = () => {
  const e = manybookSectionEl && manybookSectionEl.getBoundingClientRect().top
  headerLogoEl.textContent = e < 50 ? 'M' : '밀리의 서재'
}

menuButtonEl.addEventListener('click', toggleMenu)
window.addEventListener('scroll', scrollEventHandler)
