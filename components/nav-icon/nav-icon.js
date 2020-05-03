// components/nav-icon/nav-icon.js
Component({
  properties: {
    title: {
      type: String,
      value:'其他服务'
    },
    page_url: {
      type: String,
      value: ''
    }
  },
  externalClasses:['img-icon'],
  data: {

  },
  methods: {
    handleNav() {
      wx.navigateTo({
        url: `/pages/${this.properties.page_url}/${this.properties.page_url}`,
      })
      
      this.triggerEvent('navEvent',{},{})   // 这是向外触发的事件
    },
    // handleNav3(url) {   // 这种是获取组件对象后,调用的函数,来实现页面跳转.(停用)
    //   wx.navigateTo({
    //     url: '/pages/'+url+'/'+url,
    //   })
    // }
  }
})
