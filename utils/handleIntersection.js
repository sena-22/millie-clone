export const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animation')
    } else {
      entry.target.classList.remove('animation')
    }
  })
}
