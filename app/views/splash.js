import { peerSocket } from 'messaging'
import { Application, View, $at } from '../lib/view'

const $ = $at('#view-splash')

const MIN_DISPLAY_MS = 1500

export class ViewSplash extends View {
  el = $();

  constructor() {
    super()
  }

  goToMenu = () => {
    console.log('switching to main menu')
    Application.switchTo('ViewMenu')
  }

  onMount() {
    console.log('showing splash')
    setTimeout(() => {
      if (peerSocket.readyState == peerSocket.OPEN) {
        this.goToMenu()
      } else {
        peerSocket.onopen = this.goToMenu
      }
    }, MIN_DISPLAY_MS)
  }

  onRender() {
    // set things here
  }

  onUnmount() {
  }
}
