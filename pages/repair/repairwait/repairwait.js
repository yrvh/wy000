// pages/repair/repairwait/repairwait.js
const app = getApp()
Page({
  data: {
    img_arr:['d.jpg','door.jpg','k.jpg','r1.jpg','r2.jpg','r3.jpg','r4.jpg'],
    list: app.data.list
  },
  handleAddRepair() {
    wx.navigateTo({
      url: '/pages/repair/repairadd/repairadd',
    })
  },
  onLoad: function (options) {

  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  }
})