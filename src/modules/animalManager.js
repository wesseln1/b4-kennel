const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/animals/${id}`).then(result => result.json())
  },
  getAll() {
    console.log("here")
    return fetch(`${remoteURL}/animals`).then(result => result.json())
  }
}