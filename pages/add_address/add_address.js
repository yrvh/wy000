// pages/add_address/add_address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    forminfo: {
      cityloc: '北海市-海城区',
      gender: true,
      phone: '',
      tag: '小区'
    }
  },
  // 选择城市
  handleChangeCity(e) {
    let {forminfo} = this.data
    forminfo.cityloc = `${e.detail.value[1]}-${e.detail.value[2]}`
    this.setData({
      forminfo
    })
  },
  // 选择性别 
  handleGender(e) {
    let {gender} = e.currentTarget.dataset
    if(gender !== this.data.forminfo.gender) {
      let {forminfo} = this.data
      forminfo.gender = gender
      this.setData({
        forminfo
      })
    }
  },
  // 选择小区
  handleTag(e) {
    let {tag} = e.currentTarget.dataset
    if(tag !== this.data.forminfo.tag) {
      let {forminfo} = this.data
      forminfo.tag = tag
      this.setData({
        forminfo
      })
    }
  },
  // 从通讯录添加电话号码
  getPhoneNumber(e) {
  },
  // 保存地址
  handleSave() {
    // 保存
    // 跳转
    wx.navigateBack({
      delta: 1,
      complete: (res) => {console.log("点击了保存")},
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