<template>
  <div class="container">
    <h2 class="opening_text" />
  </div>
</template>

<script>
export default {
  mounted() {
    this.el = document.querySelector('.opening_text')
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
    this.window_onload()
  },
  methods: {
    window_onload() {
      const phrases = [
        'Hello World! ',
        'Welcome',
        'To',
        "YopiNoji's",
        'Portfolio Site.'
      ]

      let counter = 0
      const next = () => {
        this.setText(phrases[counter]).then(() => {
          setTimeout(next, 1200)
        })
        counter = (counter + 1) % phrases.length
      }

      next()
    },
    setText(newText) {
      const oldText = this.el.textContent
      const length = Math.max(oldText.length, newText.length)
      const promise = new Promise((resolve) => (this.resolve = resolve))
      this.queue = []
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 40)
        this.queue.push({ from, to, start, end })
      }
      cancelAnimationFrame(this.frameRequest)
      this.frame = 0
      this.update()
      return promise
    },
    update() {
      let output = ''
      let complete = 0
      for (let i = 0, n = this.queue.length; i < n; i++) {
        const { from, to, start, end } = this.queue[i]
        let { char } = this.queue[i]
        if (this.frame >= end) {
          complete++
          output += to
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar()
            this.queue[i].char = char
          }
          output += `<span class="dud">${char}</span>`
        } else {
          output += from
        }
      }
      this.el.innerHTML = output
      if (complete === this.queue.length) {
        this.resolve()
      } else {
        this.frameRequest = requestAnimationFrame(this.update)
        this.frame++
      }
    },
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
  }
}
</script>

<style scoped>
.opening_text {
  letter-spacing: 20px;
  color: #000;
  font-weight: lighter;
  font-size: 40px;
  display: inline-block;
  line-height: 80px;
  -webkit-transform: skewY(-10deg) scaleX(0.5);
  -moz-transform: skewY(-10deg) scaleX(0.5);
  -o-transform: skewY(-10deg) scaleX(0.5);
  transform: skewY(-10deg) scaleX(0.5);
}
.opening_text:after {
  clear: both;
  display: block;
  content: '';
  height: 0;
}
</style>
