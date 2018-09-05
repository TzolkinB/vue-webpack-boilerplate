import Vue from 'vue'
import AppComponent from './components/App/index.vue'

const vm = new Vue({
  el: '#app',
  components: {
    app: AppComponent,
  },
  render: h => h('app'), //h is a helper that creates elements, similar to React.createElement
})
