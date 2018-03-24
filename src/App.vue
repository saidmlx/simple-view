<template lang="pug">
#app
  img(src='./assets/logo.png')
  h1 SaidMusic
  select
    option(v-for= "country in countries" :value="country.value") {{country.name}}
  ul
    artist(v-for= "artist in artists" v-bind:artist="artist" v-bind:key="artist.mbid") {{artist.name}}
</template>

<script>
import getArtists from './api'

import Artist from './components/Artist.vue'

export default {
  name: 'app',
  data () {
    return {
      artists: [],
      countries:[
        {name:"España",value:"Spain"},
        {name:"México",value:"Mexico"},
        {name:"Colombia",value:"Colombia"}
      ]
    }
  },
  components:{
    Artist
  },
  mounted: function() {
    var self = this
    getArtists()
    .then(function(artists){
      self.artists = artists
    })
  }
}
</script>

<style lang="stylus">
#app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3dd2
    margin-top 60px

h1, h2
    font-weight normal

ul
    list-style-type none
    padding 0

li
    display inline-block
    margin 0 10px

a
    color #42b983
</style>
