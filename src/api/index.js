import config from './config'

const {apikey} = config

const url = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=${apikey}&format=json`

export default function getArtists (){
    return fetch(url)
    .then(res => res.json())
    .then(json => json.topartists.artist)
}
