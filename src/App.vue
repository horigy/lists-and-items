<template>
  <div id="app">
    <div class="wrapper">
      <section class="section">

        <!-- input panel -->
        <div class="panel half">
          <panel :lists="getLists"></panel>
        </div>

        <!-- result display -->
        <div class="view half">
          <displaylist :lists="getLists"></displaylist>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import panel from './components/Panel.vue'
import displaylist from './components/Result.vue'

export default {
  components: {
    panel,
    displaylist
  },
  data() {
    return { }
  },
  computed: {
    getLists() {
      let arr = this.$store.getters.GETDATA;
      return arr;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.wrapper {
    width: 100%;
}
.section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5%;

}
.half {
    width: 48%;
    border: 1px solid black;
    padding: 30px;
    height: 100%;
    margin: 30px;
}
ul {
    padding: 0;
    margin: 0;
}
li {
  list-style-type: none;
}
</style>
