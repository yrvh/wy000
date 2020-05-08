// pages/store/store.js
Page({

  data: {
    isfixed: false,
    nav_active: true,
    img_arr: ["1.jpg","2.jpg","7.jpg","4.jpg","5.jpg","6.jpg"],
    location_detail: false,
    tabs: [
      {
        id: 0,
        name: '美食',
        isActive: true,
        icon: "icon-store-cate"
      },
      {
        id: 1,
        name: '超市',
        isActive: false,
        icon: "icon-store-market"
      },
      {
        id: 2,
        name: '购物车',
        isActive: false,
        icon: "icon-store-car"
      },
      {
        id: 3,
        name: '我的',
        isActive: false,
        icon: "icon-store-mine"
      }
    ]
  },
  handleLocDetail() {
    this.setData({
      location_detail: !this.data.location_detail
    })
  },
  tabbarChange2(e){   // 通过函数改变默认的激活项
    const {tindex} = e.detail
    let {tabs} = this.data
    tabs.forEach( (item,index) => { index == tindex? item.isActive = true : item.isActive = false })
    this.setData({
      tabs: tabs
    })
  },

  handleLocDetail() {
    wx.navigateTo({
      url: '/pages/store/address/address',
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

  },
  // 监听滚动
  onPageScroll(e) {
    let scroll_top = e.scrollTop
    if(e.scrollTop>162 && !this.data.isfixed){
      this.setData({
        isfixed: true
      })
    }
    if(e.scrollTop<163 && this.data.isfixed){
      this.setData({
        isfixed: false
      })
    }
  }
})