// components/custom-tabbar/custom-tabbar.js
Component({
  properties: {
    list: {
      type: Array,
      value: []
    }
  },
  externalClasses: ['cst-tabbar','act-img','act-text'],
  data: {
    act_index: 0,
  },
  methods: {
    handleTabbar(ev){
      var tindex = ev.currentTarget.dataset.index
      this.triggerEvent('tabbarChange',{tindex},{})
    }
  },

  lifetimes: {
  },
  pageLifetimes:{
  }
})
