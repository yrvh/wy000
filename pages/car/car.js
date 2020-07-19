// pages/car/car.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    all_checkbox: false,
    
    commodity_arr: [
      {
        id: 'c1',
        commodity_slct: false,
        merchant_name: 'xxx店铺',
        img: "1.jpg",
        name: "四川火锅",
        type: [
          {
            typename: 'P.I 火锅',
            selected: true,
            price: 50
          },
          {
            typename: 'P.II 火锅',
            selected: false,
            price: 60
          },
          {
            typename: 'P.O 普通火锅',
            selected: false,
            price: 40
          },
          {
            typename: 'P.S.A 麻辣火锅',
            selected: false,
            price: 80
          },
          {
            typename: 'P.F 复合火锅',
            selected: false,
            price: 90
          }
        ],
        price: 50,
        num: 0,
      },
      {
        id: 'c2',
        commodity_slct: false,
        merchant_name: 'ccc店铺',
        img: "2.jpg",
        name: "徐福麻辣烫",
        type: [
          {
            typename: 'A 麻辣烫',
            selected: true,
            price: 500
          },
          {
            typename: 'B 麻辣烫',
            selected: false,
            price: 600
          },
          {
            typename: 'C 麻辣烫',
            selected: false,
            price: 400
          },
          {
            typename: 'D 麻辣烫',
            selected: false,
            price: 800
          },
          {
            typename: 'E 麻辣烫',
            selected: false,
            price: 90
          }
        ],
        price: 500,
        num: 0,
      },
      {
        id: 'c3',
        commodity_slct: false,
        merchant_name: 'ddd店铺',
        img: "4.jpg",
        name: "临街奶茶",
        type: [
          {
            typename: 'A 奶茶',
            selected: true,
            price: 12
          },
          {
            typename: 'B 奶茶',
            selected: false,
            price: 60
          },
          {
            typename: 'C 奶茶',
            selected: false,
            price: 40
          },
          {
            typename: 'D 奶茶',
            selected: false,
            price: 80
          },
          {
            typename: 'E 奶茶',
            selected: false,
            price: 90
          }
        ],
        price: 50,
        num: 0,
      },
      {
        id: 'c4',
        commodity_slct: false,
        merchant_name: 'xxx店铺',
        img: "1.jpg",
        name: "优质火锅",
        type: [
          {
            typename: 'P.I 火锅',
            selected: true,
            price: 50
          },
          {
            typename: 'P.II 火锅',
            selected: false,
            price: 60
          },
          {
            typename: 'P.O 普通火锅',
            selected: false,
            price: 40
          },
          {
            typename: 'P.S.A 矿渣火锅',
            selected: false,
            price: 80
          },
          {
            typename: 'P.F 复合火锅',
            selected: false,
            price: 90
          }
        ],
        price: 50,
        num: 0,
      },
      {
        id: 'c5',
        commodity_slct: false,
        merchant_name: 'fff店铺',
        img: "5.jpg",
        name: "优质水果",
        type: [
          {
            typename: 'A 型水果',
            selected: true,
            price: 50
          },
          {
            typename: 'B 型水果',
            selected: false,
            price: 60
          },
          {
            typename: 'C 型水果',
            selected: false,
            price: 40
          },
          {
            typename: 'D 型水果',
            selected: false,
            price: 80
          },
          {
            typename: 'E 型水果',
            selected: false,
            price: 90
          }
        ],
        price: 30,
        num: 0,
      },
    ],

  },

  tabbarChange2(e){   // 通过函数改变默认的激活项
    const {tindex} = e.detail
    let {tabs} = this.data
    tabs.forEach( (item,index) => { index == tindex? item.isActive = true : item.isActive = false })
    this.setData({
      tabs: tabs
    })
  },

  handleAddRepair() {
    wx.navigateTo({
      url: '/pages/repair/repairadd/repairadd',
    })
  },
  // 点击切换某一商品的类型
  handleChangeType(e) {
    let {index} = e.currentTarget.dataset
    let {index2} = e.currentTarget.dataset
    let {commodity_arr} = this.data
    commodity_arr[index].type.forEach((item,i)=>{
      i==index2? item.selected=true: item.selected=false
    })
    commodity_arr[index].price = commodity_arr[index].type[index2].price
    this.setData({
      commodity_arr
    })
  },
  // 改变某一商品的数量
  handleChangeNum(e) {
    let {index} = e.currentTarget.dataset
    let {commodity_arr} = this.data
    if(commodity_arr[index].num !== 0 || e.detail.num !== -1) commodity_arr[index].num += e.detail.num
    this.setData({
      commodity_arr
    })
  },
  // 点击某一个被选中
  handleCheckbox(e) {
    let {index} = e.currentTarget.dataset
    let {commodity_arr} = this.data
    commodity_arr.forEach((item,i) => {i==index?item.commodity_slct = !item.commodity_slct : ''
    })
    this.setData({
      all_checkbox: false,
      commodity_arr
    })
  },
  // 点击全选中
  handleAllCheckbox(e) {
    let {index} = e.currentTarget.dataset
    let {commodity_arr} = this.data
    commodity_arr.forEach((item,i) => {
      item.commodity_slct = !this.data.all_checkbox
    })
    this.setData({
      all_checkbox: !this.data.all_checkbox,
      commodity_arr
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})