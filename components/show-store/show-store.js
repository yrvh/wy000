// components/show-store/show-store.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    store_list: {
      type: Array,
      value: []
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
    handleStoreItem(e) {
      let {storeid,storename} = e.currentTarget.dataset
      this.triggerEvent('storeDetail',{storeid,storename},{})
    }
  }
})
