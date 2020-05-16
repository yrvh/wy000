// pages/store/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cityloc: '北海市',
    communityloc: '春天花园小区'
  },
  // 新增地址
  handleAdd() {
    wx.navigateTo({
      url: '/pages/store/add_address/add_address',
    })
  },
  // 切换城市
  handleChangeCity(e) {
    this.setData({
      cityloc: e.detail.value[1]
    })
  },
  // 点击选择了一个地址
  handleSelectLoc() {
    // 跳转
    wx.navigateBack({
      delta: 1,
      complete: (res) => {console.log("选择了一个地址")},
    })
  },
  // 重新定位
  handleLocation() {
    // wx.getLocation({
    //   type: 'wgs84',
    //   isHighAccuracy: true,
    //   highAccuracyExpireTime: 3000,
    //   success(res) {
    //     console.log(res)
    //     const lat = res.latitude
    //     const long = res.longitude
    //   }
    // })
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