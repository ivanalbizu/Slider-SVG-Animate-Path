// SVG Animations tuto
// https://codeburst.io/svg-morphing-the-easy-way-and-the-hard-way-c117a620b65f
// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animate

// SVG paths builder
// https://codepen.io/anthonydugois/full/mewdyZ

// Timing functions:
// http://franzheidl.github.io/keysplines/


// Settings
const setting01 = {
  dur: 1800,
  paths: [
    "M 0 750 Q 150 750 200 750 Q 250 750 300 750 Q 350 750 400 750 C 500 750 750 750 1500 750 L 1500 750 L 0 750 Z",
    "M 0 300 Q 150 100 200 300 Q 250 600 300 300 Q 350 50 400 300 C 500 750 750 50 1500 300 L 1500 750 L 0 750 Z",
    "M 0 0 Q 150 0 200 0 Q 250 0 300 0 Q 350 0 400 0 C 500 0 750 0 1500 0 L 1500 750 L 0 750 Z"
  ],
  keySplines: [
    "0.57 0.63 0.51 0.39",
    "0.57 0.63 0.51 0.39"
  ]
}
const setting02 = {
  dur: 2000,
  paths: [
    "M 0 0 Q 0 100 0 300 Q 0 550 0 600 Q 0 650 0 750 L 0 750 L 0 0 Z",
    "M 50 0 Q 900 100 450 300 Q 0 550 500 600 Q 900 650 50 750 L 0 750 L 0 0 Z",
    "M 700 0 Q 1450 100 950 300 Q 400 500 800 600 Q 1050 650 950 750 L 0 750 L 0 0 Z",
    "M 1100 0 Q 1450 100 1250 300 Q 900 550 1150 600 Q 1350 650 1500 750 L 0 750 L 0 0 Z",
    "M 1500 0 Q 1500 100 1500 300 Q 1500 550 1500 600 Q 1500 650 1500 750 L 0 750 L 0 0 Z"
  ],
  keySplines: [
    "0.57 0.63 0.51 0.39",
    "0.57 0.63 0.51 0.39",
    "0.57 0.63 0.51 0.39",
    "0.57 0.63 0.51 0.39"
  ]
}
const setting03 = {
  dur: 2300,
  paths: [
    "M 650 750 Q 1150 500 1100 0 L 1100 0 Q 1150 500 650 750 Z",
    "M 650 750 Q 1150 500 1100 0 L 1150 0 Q 1200 500 750 750 Z",
    "M 200 750 Q 800 500 800 0 L 1500 0 Q 1500 500 1200 750 Z",
    "M 0 750 Q 200 500 200 0 L 1500 0 Q 1500 500 1500 750 Z",
    "M 0 750 Q 0 500 0 0 L 1500 0 Q 1500 500 1500 750 Z"
  ],
  keySplines: [
    "0.57 0.63 0.51 0.39",
    "0.57 0.63 0.51 0.39",
    "0.57 0.63 0.51 0.39",
    "0.57 0.63 0.51 0.39"
  ]
}
const setting04 = {
  dur: 2500,
  paths: [
    "M 650 500 Q 650 500 650 500 Q 650 500 650 500 Q 650 500 650 500 C 650 500 650 500 650 500",
    "M 500 550 Q 400 400 500 450 Q 700 550 550 350 Q 500 250 700 400 C 800 450 550 650 500 550",
    "M 400 600 Q 100 350 300 400 Q 700 550 500 350 Q 250 100 800 350 C 1050 500 550 700 400 600",
    "M 250 750 Q 0 750 200 500 Q 300 400 200 250 Q 0 0 1050 150 C 1500 200 1450 750 250 750",
    "M 1500 750 Q 0 750 0 750 Q 0 400 0 0 Q 0 0 1500 0 C 1500 200 1500 750 1500 750"
  ],
  keySplines: [
    "0.57 0.63 0.51 0.39",
    "0.57 0.63 0.51 0.39",
    "0.57 0.63 0.51 0.39",
    "0.57 0.63 0.51 0.39"
  ]
}
const setting05 = {
  dur: 1500,
  paths: [
    "M 750 375 Q 525 375 450 375 Q 525 375 750 375 Q 975 375 1050 375 Q 975 375 750 375",
    "M 750 375 Q 525 450 450 375 Q 525 300 750 375 Q 975 300 1050 375 Q 975 450 750 375",
    "M 750 600 Q 525 450 450 375 Q 525 300 750 150 Q 975 300 1050 375 Q 975 450 750 600",
    "M 750 750 Q 150 600 0 375 Q 150 150 750 0 Q 1350 150 1500 375 Q 1350 600 750 750",
    "M 1500 750 Q 150 750 0 750 Q 0 0 0 0 Q 1500 0 1500 0 Q 1500 750 1500 750"
  ],
  keySplines: [
    "0.57 0.63 0.51 0.39",
    "0.57 0.63 0.51 0.39",
    "0.57 0.63 0.51 0.39",
    "0.57 0.63 0.51 0.39"
  ]
}


class Slides {
  constructor(el, setting) {
    this.DOM = { el: el }
    this.DOM.left = this.DOM.el.querySelector('.slide__left')
    this.DOM.right = this.DOM.el.querySelector('.slide__right')
    this.DOM.slides = this.DOM.el.querySelectorAll('.slide')
    this.DOM.slidesCount = this.DOM.slides.length
    this.DOM.slidesBg = this.DOM.el.querySelectorAll('.bg-slide')
    this.DOM.slidesNavBtns = this.DOM.el.querySelectorAll('.slide__nav .js-nav')
    this.DOM.gotoBtns = this.DOM.el.querySelectorAll('[data-goto]')
    this.isAnimating = false
    this.touchStartX = 0
    this.init(setting)
    this._addEventListeners()
  }

  init(setting) {
    this.DOM.slides.forEach(slide => {
      const path = slide.querySelector('clipPath path')    
      const animate = path.querySelector('animate')

      path.setAttributeNS(null, 'd', setting.paths[0])
      animate.setAttributeNS(null, 'values', arrayMirrorToString(setting.paths))
      animate.setAttributeNS(null, 'keySplines', arrayMirrorToString(setting.keySplines))
      animate.setAttributeNS(null, 'dur', `${setting.dur}ms`)
    })
  }

  _addEventListeners() {
    this.DOM.gotoBtns.forEach(nav => {
      nav.addEventListener('click', event => {
        if (this.isAnimating) return

        const goto = event.target.getAttribute('data-goto')
        const current = this.DOM.el.querySelector('.slide--active').getAttribute('data-slide')

        this.navigate(current, goto)
      })
    })
    this.DOM.slides.forEach(slide => {
      slide.nextElementSibling.addEventListener('touchstart', this.handleTouchStart.bind(this), false)
      slide.nextElementSibling.addEventListener('touchend', this.handleTouchEnd.bind(this), false)
    })
  }

  navigate(from, to) {
    this.isAnimating = true

    this.DOM.slidesNavBtns.forEach(nav => nav.classList.remove('btn--active'))

    this.DOM.left.setAttribute('data-goto', `${to == 0 ? this.DOM.slidesCount - 1 : +to-1}`)
    this.DOM.right.setAttribute('data-goto', `${to == this.DOM.slidesCount - 1 ? 0 : +to+1}`)

    const currentSlide = this.DOM.slides[from]
    const nextSlide = this.DOM.slides[to]
    const currentBg = this.DOM.slidesBg[from]
    const nextBg = this.DOM.slidesBg[to]

    const animate = nextSlide.querySelector('animate')

    animate.beginElement()
    setTimeout(() => {
      nextSlide.style.zIndex = 1
      nextSlide.classList.add('slide--active')

      animate.addEventListener('endEvent', () => {
        this.DOM.slidesNavBtns[to].classList.add('btn--active')
        nextSlide.style.zIndex = -1
        currentSlide.classList.remove('slide--active')
        currentBg.classList.remove('bg-slide--active')
        nextBg.classList.add('bg-slide--active')

        this.isAnimating = false
      })
    }, 1)

  }

  handleTouchStart(event) {
    this.touchStartX = event.touches[0].pageX
  }

  handleTouchEnd(event) {
    const moveX = event.changedTouches[event.changedTouches.length-1].pageX - this.touchStartX
    if (moveX < -10) this.DOM.right.click()
    else if (moveX > 10) this.DOM.left.click()
  }

}

const arrayMirrorToString = arr => {
  let newArr = [...arr].reverse()
  if (newArr.length % 2 != 0) newArr.shift()

  return arr.concat(newArr).join(';')
}

document.addEventListener('DOMContentLoaded', () => {

  const slide = new Slides(document.querySelector('#slide'), setting01)

  // Not necessary. Use to show example paths animations
  document.querySelectorAll('[data-setting]').forEach(setting => {
    setting.addEventListener('click', event => {
      
      const target = event.target;
      const section = target.closest('.section')
      const dur = section.querySelector('.js-btn-dur').value
      
      if (dur > 30000) return alert ('Maximum value of 30 seconds for transition')

      document.querySelectorAll('[data-setting]').forEach(section => section.closest('.section').classList.remove('section--active'))
      section.classList.add('section--active')

      let settingObjet = {}

      switch (target.getAttribute('data-setting')) {
        case 'setting01':
          setting01.dur = dur
          settingObjet = setting01
          break;
        case 'setting02':
          setting02.dur = dur
          settingObjet = setting02
          break;
        case 'setting03':
          setting03.dur = dur
          settingObjet = setting03
          break;
        case 'setting04':
          setting04.dur = dur
          settingObjet = setting04
          break;
        case 'setting05':
          setting05.dur = dur
          settingObjet = setting05
          break;
        default:
          break;
      }

      slide.init(settingObjet)
    })
  })

  document.querySelector('.js-open-modal').addEventListener('click', () => {
    document.body.classList.add('modal-active')
  })
  document.querySelector('.js-close-modal').addEventListener('click', () => {
    document.body.classList.remove('modal-active')
  })

})
