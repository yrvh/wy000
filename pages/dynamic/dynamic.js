// pages/dynamic/dynamic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img_arr0:[
      {
        nickname: '小赵',
        ava: '1.jpg',
        img: '1.jpg',
        gender: false,
        date: '3分钟',
        txt: 'hello 大家伙,早上好! 早餐已经制作完毕 @!@',
        hiddenInfo: false,
        praiseNum: 235,
        hiddenMore: true,
        msg: [
          {
            name: '晴天',
            content: 'moring! 你好,'
          },
          {
            name: 'babe',
            content: '早起到鸟儿有虫吃,'
          },
          {
            name: '会飞的鱼',
            content: '早上好,你起得好早啊'
          },
          {
            name: '行走的树',
            content: '落霞与孤鹜齐飞,秋水共长天一色'
          },
          {
            name: '顺风飘叶',
            content: '桃花英霞飞神剑,碧海潮生按玉箫'
          },
        ]
      },
      {
        nickname: '小钱',
        ava: '2.jpg',
        img: '5.jpg',
        gender: true,
        date: '28分钟',
        txt: '',
        hiddenInfo: false,
        praiseNum: 10,
        hiddenMore: true,
        msg: [
          {
            name: '晴天',
            content: 'moring! 你好,'
          },
          {
            name: 'babe',
            content: '早起到鸟儿有虫吃,'
          },
          {
            name: '会飞的鱼',
            content: '早上好,你起得好早啊'
          },
          {
            name: '行走的树',
            content: '落霞与孤鹜齐飞,秋水共长天一色'
          },
          {
            name: '顺风飘叶',
            content: '桃花英霞飞神剑,碧海潮生按玉箫'
          },
        ]
      },
      {
        nickname: '小孙',
        ava: '3.gif',
        img: '4.jpg',
        gender: true,
        date: '40分钟',
        txt: '去旅游很开心',
        hiddenInfo: false,
        praiseNum: 0,
        hiddenMore: true,
        msg: []
      },
      {
        nickname: '小丽',
        ava: '4.jpg',
        img: '3.gif',
        gender: false,
        date: '1小时前',
        txt: '在海边散步,游泳',
        hiddenInfo: false,
        praiseNum: 20,
        hiddenMore: true,
        msg: [
          {
            name: '晴天',
            content: 'moring! 你好,'
          },
          {
            name: 'babe',
            content: '早起到鸟儿有虫吃,'
          },
          {
            name: '会飞的鱼',
            content: '早上好,你起得好早啊'
          },
          {
            name: '行走的树',
            content: '落霞与孤鹜齐飞,秋水共长天一色'
          },
          {
            name: '顺风飘叶',
            content: '桃花英霞飞神剑,碧海潮生按玉箫'
          },
        ]
      },
      {
        nickname: '小芳',
        ava: '5.jpg',
        img: '2.jpg',
        gender: false,
        date: '9小时前',
        txt: '自驾游去拉萨',
        hiddenInfo: false,
        praiseNum: 104,
        hiddenMore: true,
        msg: []
      },
      {
        nickname: '小竹',
        ava: '7.jpg',
        img: '1.jpg',
        gender: false,
        date: '24小时前',
        txt: '每天运动,坚持',
        hiddenInfo: false,
        praiseNum: 201,
        hiddenMore: true,
        msg: []
      }
    ],

  },

  handleMore(e) {
    let { index } = e.currentTarget.dataset
    let { img_arr0 } = this.data
    img_arr0[index].hiddenMore = !img_arr0[index].hiddenMore
    this.setData({
      img_arr0
    })
  },
  handlePraise(e) {
    let { index } = e.currentTarget.dataset
    let { img_arr0 } = this.data
    ++ img_arr0[index].praiseNum
    this.setData({
      img_arr0: img_arr0
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