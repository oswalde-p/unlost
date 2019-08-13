import { me } from 'appbit'
import document from 'document'
import { gettext } from 'i18n'
import { get } from '../lib/messages.js'
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
    get('mainMenuItems', listItems => {
      for(let i = 0; i < LIST_ITEM_COUNT; i++) {
        const viewItem = document.getElementById(`menu-item-${i}`)
        let item =listItems[i]
        if(item) {
          viewItem.getElementById('title').text = gettext(item.t)
        } else {
          viewItem.style.display = 'none'
        }
      }
    })
    // this.btnStart.addEventListener("click", this.handleStart);
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
