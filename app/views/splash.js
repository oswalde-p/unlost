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
    console.log('showing splash')
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
    const fetchData = new Promise((resolve, reject) => {
      try{
        get('mainMenuItems', (result) => {
          writeFileSync('menu_items.json', result, 'json') // save to use later in main menu
        })
        resolve()
      } catch(err) {
        console.error(err)
        reject()
      }
    })

    await Promise.all([
      fetchData,
      new Promise((resolve) => setTimeout(resolve, MIN_DISPLAY_MS)) // wait at least this long
    ])
    Application.switchTo('ViewMenu')
  }
}
