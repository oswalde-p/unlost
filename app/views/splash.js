import { Application, View, $at } from '../lib/view'
import { get } from '../lib/messages.js'
import { writeFileSync } from 'fs'

const $ = $at('#view-splash')

const MIN_DISPLAY_MS = 2000

export class ViewSplash extends View {
  el = $();

  constructor() {
    super()
  }

  onMount() {
    this.fetchAndContinue()
  }

  onRender() {
    // set things here
  }

  onUnmount() {
  }

  /**
   * fetch some data from companion, and continue to main menu after at least MIN_DISPLAY_MS
   */
  async fetchAndContinue() {
    await Promise.all([
      new Promise((resolve, reject) => {
        get('mainMenuItems', (result) => {
          try {
            writeFileSync('menu_items.json', JSON.stringify(result), 'utf-8') // save to use later in main menu
            resolve()
          } catch(err) {
            reject()
          }
        })
      }),
      new Promise((resolve) => setTimeout(resolve, MIN_DISPLAY_MS)) // wait at least this long
    ])
    Application.switchTo('ViewMenu')
  }
}
