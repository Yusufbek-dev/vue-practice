
const app = Vue.createApp({
  data() {
    return {
      count:0,
    };
  },
  computed: {
    showResult() {
      if(this.count < 37) {
        return 'Not there yet'
      }else if(this.count === 37){
       return this.count
      }else {
        return 'Too much!'
      }
    }
  },
  watch:{
    showResult() {
      const that = this;
      setTimeout(function() {
        that.count = 0;
      }, 5000)
    },
  },
  methods: {
    add(num) {
      this.count = this.count + num;
    },
  }
});

app.mount('#assignment')