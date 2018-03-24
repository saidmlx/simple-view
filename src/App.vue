<template lang="pug">
#app
  img(src='http://saidmlx.online/simple-vue/dist/logo.png')
  h1 SaidMusic
  select(v-model="selectedCountry")
    option(v-for= "country in countries" :value="country.value") {{country.name}}
  spinner(v-show="loadding")
  ul
    artist(v-for= "artist in artists" v-bind:artist="artist" v-bind:key="artist.mbid") {{artist.name}}
</template>

<script>
import getArtists from './api';
import Artist from  './components/Artist.vue';
import spinner from './components/Spinner.vue';

export default {
  name: 'app',
  data () {
    return {
      artists: [],
      countries:[
        {name:"España",value:"spain"},
        {name:"México",value:"mexico"},
        {name:"Colombia",value:"colombia"}
      ],
      selectedCountry:'colombia',
      loadding:true
    }
  },
  methods:{
    refreshArtist(){
      var self = this
      this.loadding=true;
      self.artists=[];
      getArtists(this.selectedCountry)
      .then(function(artists){
        self.loadding=false
        self.artists = artists
      })
    }
  },
  components:{
    Artist,
    spinner
  },
  watch:{
    selectedCountry:function(){
      this.refreshArtist()
    }
  },
  mounted: function() {
    this.refreshArtist()
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
