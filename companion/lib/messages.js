import { peerSocket } from 'messaging'

const getters = {}

const addResource = function(key, handler) {
  getters[key] = handler
}

peerSocket.onmessage = function(evt) {
  if (evt.data.key == 'get') {
    const resource = evt.data.body
    peerSocket.send({
      key: resource,
      body: getters[resource]()
    })
  } else {
    console.error('Uknown event received')
    console.error(JSON.stringify(evt.data, null, 2))
  }
}

export { addResource }
