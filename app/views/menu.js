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

  handleStart = () => {
    Application.switchTo('ViewSomethingElse')
  }

  handleKeypress = (evt) => {
    if (evt.key === 'down') this.handleStart()
  }

  onMount() {
    me.appTimeoutEnabled = false // Disable timeout
    const listItems = JSON.parse(readFileSync('menu_items.json', 'utf-8')) // saved in the splash screen
    console.log(JSON.stringify(listItems, null, 2))
    for(let i = 0; i < LIST_ITEM_COUNT; i++) {
      const viewItem = document.getElementById(`menu-item-${i}`)
      let item =listItems[i]
      if(item) {
        viewItem.getElementById('title').text = gettext(item.t)
      } else {
        viewItem.style.display = 'none'
      }
    }
    document.addEventListener('keypress', this.handleKeypress)
  }

  onRender() {
    // set things here
  }

  onUnmount() {
    // this.btnStart.removeEventListener("click", this.handleStart);
    document.removeEventListener('keypress', this.handleKeypress)
  }
}
