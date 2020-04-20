// pages/repair/repairing/repairing.js
const app = getApp()
Page({
  data: {
    img_arr:['r4.jpg','door.jpg','k.jpg','r1.jpg','r2.jpg','r3.jpg','d.jpg'],
    list: app.data.list,
    active_index: 0,
  },
  handleAddRepair() {
    wx.navigateTo({
      url: '/pages/repair/repairadd/repairadd',
    })
  },
  onLoad: function (options) {
    this.setData({
      active_index:options.index
    })
    console.log(options)
  },

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