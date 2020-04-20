// components/custom-tabbar/custom-tabbar.js
Component({
  properties: {
    list: {
      type: Object,
      value: []
    },
    active_index: {
      type: Number,
      value: 0
    }
  },
  externalClasses: ['cst-tabbar','act-img','act-text'],
  data: {
    act_index: 0,
  },
  methods: {
    handleTabbar(ev){
      this.setData({
        act_index: ev.currentTarget.dataset.index
      })
      var cindex = ev.currentTarget.dataset.index
      this.triggerEvent('tabbarEvent',{},{})
      
      wx.redirectTo({
        url: this.properties.list.url[cindex]+'?index='+ cindex,
      })
    }
  },
  lifetimes: {
    created(){
    }
  },
  pageLifetimes:{
    show() {
      this.setData({
        act_index: this.properties.active_index
      })
    }
  }
})
