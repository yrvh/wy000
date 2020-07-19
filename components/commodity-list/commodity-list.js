// components/commodity-list/commodity-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    commodity_arr: {
      type: Array,
      value: []
    },
    personal_action: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleMessage(e){
      let {id,name} = e.currentTarget.dataset
      console.log(id,name)
      this.triggerEvent('message',{id,name},{})
    },
    handleSupport(e){
      let {id,name} = e.currentTarget.dataset
      this.triggerEvent('support',{id,name},{})
    },
    handleShare(e){
      let {id,name} = e.currentTarget.dataset
      this.triggerEvent('share',{id,name},{})
    },
    handleAddCat(e){
      let {id,name} = e.currentTarget.dataset
      this.triggerEvent('addcat',{id,name},{})
    },
  }
})
