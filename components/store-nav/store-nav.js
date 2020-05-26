// components/store-nav/store-nav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    nav_arr: {
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
    handleNavChange(e) {
      let {id} = e.currentTarget.dataset
      this.triggerEvent('change',{id},{})
    }
  }
})
