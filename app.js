import {handleIntersection} from '/utils/handleIntersection.js'

export const headerWrapEl = document.querySelector('.header-wrap')
export const headerLogoEl = document.querySelector('.header-logo a')
export const menuButtonEl = document.querySelector('.btn-nav')
export const navEl = document.querySelector('.nav-box nav')

export const introSectionEl = document.getElementById('intro')
export const manybookSectionEl = document.getElementById('manybook')

const ioIntro = new IntersectionObserver(handleIntersection)
const ioManybook = new IntersectionObserver(handleIntersection)

ioIntro.observe(introSectionEl)
ioManybook.observe(manybookSectionEl)
