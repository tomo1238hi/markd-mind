import Vue from 'vue'
import App from './App'
import router from './router'
import VueMermaid from 'vue-mermaid'

Vue.use(VueMermaid)

Vue.config.productionTip = false

/* eslint-disable no-new */
let vm = new Vue({
    el: '#app',
    router,
    components: {
	App,
	data: {
	    isActive: '1'
	},
	methods: {
	    change: function(num){
		this.isActive = num
	    }
	}
    },
    template: '<App/>'
})
