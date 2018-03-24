import config from './config'

const {apikey} = config

const url = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=${apikey}&format=json`

export default function getArtists (country){
    const simpleUrl = url.replace(':country',country) 
    return fetch(simpleUrl)
    .then(res => res.json())
    .then(json => json.topartists.artist)
}
