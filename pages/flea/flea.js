// pages/flea/flea.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 0,
        name: '二手直卖',
        isActive: true,
        icon: "icon-flea-direct"
      },
      {
        id: 1,
        name: '分类',
        isActive: false,
        icon: "icon-flea-kind"
      },
      {
        id: 2,
        name: '发布',
        isActive: false,
        icon: "icon-flea-add"
      },
      {
        id: 3,
        name: '我的',
        isActive: false,
        icon: "icon-flea-mine"
      },
    ]
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