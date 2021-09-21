import request from 'superagent'

const baseUrl = 'https://imdb-api.com/en/API'
const apiKey = process.env.apiKey

export function searchIMDB (searchTerm) {
  return request
    .get(`${baseUrl}/SearchMovie/${apiKey}/${searchTerm}`)
    .then(res => res.body.results) // we use .results because we know that is the array we get back
}

// might want to do this entire script to the server side
