<template>
  <div id="app">
    <header class="header">
      <nav class="inner">
        <router-link to="/">Top</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </header>
    <hello />
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Hello from '@/components/Hello'

@Component({
  components: {
    Hello
  }
})
export default class App extends Vue {

}
</script>
<style lang="stylus">
.fade-enter-active, .fade-leave-active
  transition all .2s ease
.fade-enter, .fade-leave-active
  opacity 0
@media (max-width 860px)
  .header .inner
    padding 15px 30px
@media (max-width 600px)
  .header
    .inner
      padding 15px
    a
      margin-right 1em
    .github
      display none
</style>
