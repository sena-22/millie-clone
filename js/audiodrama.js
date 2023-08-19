import {audiodramaObjectVideo, audiodramaVideo} from './app.js'

let isPlaying = false

const playVideo = () => {
  if (isPlaying) {
    audiodramaVideo.pause()
    isPlaying = false
  } else {
    audiodramaVideo.src = '../video/audiodrama_dummy.mp4'
    audiodramaVideo.play()
    isPlaying = true
  }
}

audiodramaObjectVideo.addEventListener('click', playVideo)
