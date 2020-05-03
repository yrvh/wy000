// pages/carry/carry.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 0,
        name: '上沙石',
        isActive: true,
        icon: "icon-carry-sand"
      },
      {
        id: 1,
        name: '下垃圾',
        isActive: false,
        icon: "icon-carry-rubbish"
      },
      {
        id: 2,
        name: '找家政',
        isActive: false,
        icon: "icon-carry-wifery"
      },
      {
        id: 3,
        name: '查记录',
        isActive: false,
        icon: "icon-carry-record"
      }
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