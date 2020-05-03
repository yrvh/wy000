// pages/rent/rent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img_arr0:[
      {
        img: '1.jpg',
        hiddenInfo: false,
      },
      {
        img: '2.jpg',
        hiddenInfo: false,
      },
      {
        img: '3.gif',
        hiddenInfo: false,
      },
      {
        img: '4.jpg',
        hiddenInfo: false,
      },
      {
        img: '5.jpg',
        hiddenInfo: false,
      },
      {
        img: '7.jpg',
        hiddenInfo: false,
      }
    ],
    tabs: [
      {
        id: 0,
        name: '找房',
        isActive: true,
        icon: "icon-rent-seek"
      },
      {
        id: 1,
        name: '发布',
        isActive: false,
        icon: "icon-rent-issue"
      },
      {
        id: 2,
        name: '记录',
        isActive: false,
        icon: "icon-rent-record"
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
  handleInfo(e) {   // 函数,控制房屋信息的显隐
    let {dindex} = e.currentTarget.dataset
    let {img_arr0} = this.data
    img_arr0.forEach( (item,index) => {
      index == dindex? item.hiddenInfo = !item.hiddenInfo : ''
    })
    this.setData({
      img_arr0: img_arr0
    })
  },
  
  handleDetail() {
    wx.navigateTo({
      url: '/pages/rent/rentdetail/rentdetail',
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