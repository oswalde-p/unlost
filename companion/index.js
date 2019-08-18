import { addResource } from './lib/messages'

addResource('mainMenuItems', () =>  [
  { t: 'menu.komoot', screenName: 'ViewKomootTrips' },
  { t: 'menu.gmaps' },
  { t: 'menu.settings' }
])

addResource('komootTrips', () =>  [
  { t: 'Hike 1' },
  { t: 'Hike 2' },
  { t: 'Bike trip 1' }
])
