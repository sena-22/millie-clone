import {handleIntersection} from '/utils/handleIntersection.js'

export const headerWrapEl = document.querySelector('.header-wrap')
export const headerLogoEl = document.querySelector('.header-logo a')
export const menuButtonEl = document.querySelector('.btn-nav')
export const navEl = document.querySelector('.nav-box nav')

export const introSectionEl = document.getElementById('intro')
export const manybookSectionEl = document.getElementById('manybook')
export const audiodramaSectionEl = document.getElementById('audiodrama')

export const audiodramaObjectVideo = document.querySelector('.object-video')
export const audiodramaVideo = document.querySelector('.dynamic-video')

const ioIntro = new IntersectionObserver(handleIntersection)
const ioManybook = new IntersectionObserver(handleIntersection)
const ioAudiodrama = new IntersectionObserver(handleIntersection)

ioIntro.observe(introSectionEl)
ioManybook.observe(manybookSectionEl)
ioAudiodrama.observe(audiodramaSectionEl)
