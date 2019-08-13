import { peerSocket } from 'messaging'

const handlers = {}
let queue = []

peerSocket.onopen = function(){
  queue.forEach(func => func())
  queue = []
}

peerSocket.onmessage = function(evt) {
  if(!handlers[evt.data.key]) {
    console.error('Unknown message received:')
    console.error(JSON.stringify(evt.data, null, 2))
  } else {
    handlers[evt.data.key](evt.data.body)
  }
}

const get = async function(resource, callback) {
  console.log(`requestiong resource '${resource}'`)
  handlers[resource] = callback // WARNING - requesting the same resource twice will overwrite the first handler
  if (peerSocket.readyState === peerSocket.OPEN) {
    peerSocket.send({ key:'get', body: resource })
  } else {
    queue.push(() => peerSocket.send({key: 'get', body: resource })) // add it to the queue to send when ready
  }
}

export { get }
