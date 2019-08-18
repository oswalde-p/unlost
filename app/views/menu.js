import { me } from 'appbit'
import document from 'document'
import { readFileSync } from 'fs'
import { gettext } from 'i18n'
import { Application, View, $at } from '../lib/view'

const $ = $at('#view-menu')
const LIST_ITEM_COUNT = 3

export class ViewMenu extends View {
  el = $()

  constructor() {
    // this.btnStart = $("#btnStart");
    // this.lblTitle = $("#lblTitle");

    super()
  }

  onMount() {
    me.appTimeoutEnabled = false // Disable timeout
    const listItems = readFileSync('menu_items.json', 'json') // saved in the splash screen
    for(let i = 0; i < LIST_ITEM_COUNT; i++) {
      const viewItem = document.getElementById(`menu-item-${i}`)
      let item =listItems[i]
      if(item) {
        viewItem.getElementById('title').text = gettext(item.t)
        if (item.screenName) {
          viewItem.getElementById('icon').addEventListener('click', () => Application.switchTo(item.screenName))
        }
      } else {
        viewItem.style.display = 'none'
      }
    }
  }

  onRender() {
    // set things here
  }

  onUnmount() {
    // this.btnStart.removeEventListener("click", this.handleStart);
  }
}
