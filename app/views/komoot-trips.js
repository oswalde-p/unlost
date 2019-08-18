import document from 'document'
import { gettext } from 'i18n'
import { get } from '../lib/messages.js'
import { View, $at, Application } from '../lib/view'

const $ = $at('#view-menu')
const LIST_ITEM_COUNT = 3

export class ViewKomootTrips extends View {
  el = $()

  constructor() {
    super()
  }

  handleButton = (evt) => {
    evt.preventDefault()
    switch (evt.key) {
    case 'back':
      this.handleCancel()
      break
    }
  }

  handleCancel = () => {
    Application.switchTo('ViewMenu')
  }

  onMount() {
    document.addEventListener('keypress', this.handleButton)
    get('komootTrips', listItems => {
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
  }

  onRender() {
    // set things here
  }

  onUnmount() {
    document.removeEventListener('keypress', this.handleButton)
  }
}
