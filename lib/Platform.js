import Colors from './ColorsEnum.js'
import getColor from './getColor.js'

class Platform {
  constructor () {
    this.color = Colors.CYAN
    this.x = 0
    this.y = 0
    this.width = 0
    this.height = 0
  }

  render (ctx) {
    ctx.fillStyle = getColor(this.color)
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}

export default Platform
