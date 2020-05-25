// pages/shops/shops.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nav_arr: [
      {
        id: 0,
        title: '点餐',
        isActive: true
      },
      {
        id: 1,
        title: '评价',
        isActive: false
      },
      {
        id: 2,
        title: '商家',
        isActive: false
      }
    ],
    side_arr: [
      {
        id: 0,
        name: '本店特惠',
        isActive: true,
      },
      {
        id: 1,
        name: '本店套餐',
        isActive: false,
      },
      {
        id: 2,
        name: '美味小炒',
        isActive: false,
      },
      {
        id: 3,
        name: '特色炖菜',
        isActive: false,
      },
      {
        id: 4,
        name: '主食饮料',
        isActive: false,
      }
    ]
  },
  // 点击切换中部导航
handleNavChange(e) {
  let {index} = e.currentTarget.dataset
  let {nav_arr} = this.data
  nav_arr.forEach((item,i) => {i==index? item.isActive=true : item.isActive=false})
  this.setData({
    nav_arr
  })
},
  // 点击侧边栏导航
handleSideChange(e) {
  let {index} = e.currentTarget.dataset
  let {side_arr} = this.data
  side_arr.forEach((item,i) => {i==index? item.isActive=true : item.isActive=false})
  this.setData({
    side_arr
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