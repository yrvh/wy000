// components/inputNumber/inputNumber.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    num_value: {
      type: Number,
      value: 0
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

    // 组件给页面传事件
    inputChange(e){
      let {num} = e.currentTarget.dataset
      this.triggerEvent('changeNum',{num},{})
    },
  }
})
