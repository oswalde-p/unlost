import { Application, View, $at } from '../lib/view'
import { get } from '../lib/messages.js'
import { writeFileSync } from 'fs'

const $ = $at('#view-splash')

const MIN_DISPLAY_MS = 4000
let gotItems = false

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
    let waited = false
    console.log('showing splash')

    get('mainMenuItems', (result) => {
      writeFileSync('menu_items.json', JSON.stringify(result), 'utf-8') // save to use later in main menu
      console.log('b')
      gotItems = true
      if (waited) Application.switchTo('ViewMenu')
    })

    setTimeout(() => {
      waited = true
      if (gotItems) {
        this.goToMenu()
      }
    }, MIN_DISPLAY_MS)
  }

  onRender() {
    // set things here
  }

  onUnmount() {
  }
}
