// pages/fruit/fruit.js
Page({

  data: {
    // 店铺列表数据
    list_arr: [
      {
        id: 0,
        ava: 'dish.png',
        name: '重庆川菜馆',
        grade: '9.7',
        amount: 3450,
        sendmin:20,
        discounts: ['20减6','50减18','100减42','150减67',],
        goods: [
          {
            food_id: 10,
            img: '1.jpg',
            name: '水煮鱼',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 11,
            img: '2.jpg',
            name: '毛血旺',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 12,
            img: '3.gif',
            name: '猪肚鸡',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 13,
            img: '4.jpg',
            name: '得莫利炖鱼',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 14,
            img: '5.jpg',
            name: '酸菜鱼',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 15,
            img: '6.jpg',
            name: '麻婆豆腐',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 16,
            img: '7.jpg',
            name: '麻辣牛蛙',
            new_price: 43,
            old_price: 55
          },
        ],
      },
      {
        id: 1,
        ava: 'barbecue.png',
        name: '大旺烧烤店',
        grade: '8.6',
        amount: 2560,
        sendmin:15,
        discounts: ['20减6','50减18','100减42','150减67',],
        goods: [
          {
            food_id: 21,
            img: '1.jpg',
            name: '水煮鱼',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 22,
            img: '2.jpg',
            name: '毛血旺',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 23,
            img: '3.gif',
            name: '猪肚鸡',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 24,
            img: '4.jpg',
            name: '得莫利炖鱼',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 25,
            img: '5.jpg',
            name: '酸菜鱼',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 26,
            img: '6.jpg',
            name: '麻婆豆腐',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 27,
            img: '7.jpg',
            name: '麻辣牛蛙',
            new_price: 43,
            old_price: 55
          },
        ],
      },
      {
        id: 2,
        ava: 'pepper.png',
        name: '张记麻辣烫',
        grade: '9.9',
        amount: 5675,
        sendmin:20,
        discounts: ['20减6','50减18','100减42','150减67',],
        goods: [
          {
            food_id: 31,
            img: '1.jpg',
            name: '水煮鱼',
            new_price: 43,
            old_price: 55
          },
          {
            
            food_id: 32,
            img: '2.jpg',
            name: '毛血旺',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 33,
            img: '3.gif',
            name: '猪肚鸡',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 34,
            img: '4.jpg',
            name: '得莫利炖鱼',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 35,
            img: '5.jpg',
            name: '酸菜鱼',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 36,
            img: '6.jpg',
            name: '麻婆豆腐',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 37,
            img: '7.jpg',
            name: '麻辣牛蛙',
            new_price: 43,
            old_price: 55
          },
        ],
      },
      {
        id: 3,
        ava: 'noodles.png',
        name: '兰州拉面',
        grade: '9.8',
        amount: 3453,
        sendmin:25,
        discounts: ['20减6','50减18','100减42','150减67',],
        goods: [
          {
            food_id: 91,
            img: '1.jpg',
            name: '水煮鱼',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 92,
            img: '2.jpg',
            name: '毛血旺',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 93,
            img: '3.gif',
            name: '猪肚鸡',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 94,
            img: '4.jpg',
            name: '得莫利炖鱼',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 95,
            img: '5.jpg',
            name: '酸菜鱼',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 96,
            img: '6.jpg',
            name: '麻婆豆腐',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 97,
            img: '7.jpg',
            name: '麻辣牛蛙',
            new_price: 43,
            old_price: 55
          },
        ],
      },
      {
        id: 4,
        ava: 'hamburger.png',
        name: '华莱士汉堡',
        grade: '9.6',
        amount: 7689,
        sendmin:30,
        discounts: ['20减6','50减18','100减42','150减67',],
        goods: [
          {
            food_id: 41,
            img: '1.jpg',
            name: '水煮鱼',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 42,
            img: '2.jpg',
            name: '毛血旺',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 43,
            img: '3.gif',
            name: '猪肚鸡',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 44,
            img: '4.jpg',
            name: '得莫利炖鱼',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 45,
            img: '5.jpg',
            name: '酸菜鱼',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 46,
            img: '6.jpg',
            name: '麻婆豆腐',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 47,
            img: '7.jpg',
            name: '麻辣牛蛙',
            new_price: 43,
            old_price: 55
          },
        ],
      },
      {
        id: 5,
        ava: 'rice.png',
        name: '特色腊烧饭',
        grade: '9.3',
        amount: 5463,
        sendmin:15,
        discounts: ['20减6','50减18','100减42','150减67',],
        goods: [
          {
            food_id: 51,
            img: '1.jpg',
            name: '水煮鱼',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 52,
            img: '2.jpg',
            name: '毛血旺',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 53,
            img: '3.gif',
            name: '猪肚鸡',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 54,
            img: '4.jpg',
            name: '得莫利炖鱼',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 55,
            img: '5.jpg',
            name: '酸菜鱼',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 56,
            img: '6.jpg',
            name: '麻婆豆腐',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 57,
            img: '7.jpg',
            name: '麻辣牛蛙',
            new_price: 43,
            old_price: 55
          },
        ],
      },
      {
        id: 6,
        ava: 'barbecue.png',
        name: '冰沙奶茶店',
        grade: '8.8',
        amount: 9239,
        sendmin:18,
        discounts: ['20减6','50减18','100减42','150减67',],
        goods: [
          {
            food_id: 61,
            img: '1.jpg',
            name: '水煮鱼',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 62,
            img: '2.jpg',
            name: '毛血旺',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 63,
            img: '3.gif',
            name: '猪肚鸡',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 64,
            img: '4.jpg',
            name: '得莫利炖鱼',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 65,
            img: '5.jpg',
            name: '酸菜鱼',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 66,
            img: '6.jpg',
            name: '麻婆豆腐',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 67,
            img: '7.jpg',
            name: '麻辣牛蛙',
            new_price: 43,
            old_price: 55
          },
        ],
      },
      {
        id: 7,
        ava: 'allfood.png',
        name: '东北菜馆',
        grade: '9.1',
        amount: 8890,
        sendmin:30,
        discounts: ['20减6','50减18','100减42','150减67',],
        goods: [
          {
            food_id: 71,
            img: '1.jpg',
            name: '水煮鱼',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 72,
            img: '2.jpg',
            name: '毛血旺',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 73,
            img: '3.gif',
            name: '猪肚鸡',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 74,
            img: '4.jpg',
            name: '得莫利炖鱼',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 75,
            img: '5.jpg',
            name: '酸菜鱼',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 76,
            img: '6.jpg',
            name: '麻婆豆腐',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 77,
            img: '7.jpg',
            name: '麻辣牛蛙',
            new_price: 43,
            old_price: 55
          },
        ],
      },
      {
        id: 8,
        ava: 'chafingdish.png',
        name: '川湘火锅店',
        grade: '9.1',
        amount: 2345,
        sendmin:20,
        discounts: ['20减6','50减18','100减42','150减67',],
        goods: [
          {
            food_id: 81,
            img: '1.jpg',
            name: '水煮鱼',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 82,
            img: '2.jpg',
            name: '毛血旺',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 83,
            img: '3.gif',
            name: '猪肚鸡',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 84,
            img: '4.jpg',
            name: '得莫利炖鱼',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 85,
            img: '5.jpg',
            name: '酸菜鱼',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 86,
            img: '6.jpg',
            name: '麻婆豆腐',
            new_price: 43,
            old_price: 55
          },
          {
            food_id: 87,
            img: '7.jpg',
            name: '麻辣牛蛙',
            new_price: 43,
            old_price: 55
          },
        ],
      }
    ],

    // 中部导航是否固定
    is_hidden: true,
    // 中部导航循环渲染
    nav_arr:[
      {
        id: 'f1',
        icon: 'allfood.png',
        title: '全部',
        isActive: true
      },
      {
        id: 'f2',
        icon: 'barbecue.png',
        title: '烤肉烤串',
        isActive: false
      },
      {
        id: 'f3',
        icon: 'dish.png',
        title: '特色炒菜',
        isActive: false
      },
      {
        id: 'f4',
        icon: 'chicken.png',
        title: '炸鸡炸串',
        isActive: false
      },
      {
        id: 'f5',
        icon: 'pepper.png',
        title: '麻辣烫',
        isActive: false
      },
      {
        id: 'f6',
        icon: 'noodles.png',
        title: '面食粥点',
        isActive: false
      },
      {
        id: 'f7',
        icon: 'chafingdish.png',
        title: '火锅',
        isActive: false
      },
      {
        id: 'f8',
        icon: 'hamburger.png',
        title: '汉堡披萨',
        isActive: false
      },
      {
        id: 'f9',
        icon: 'rice.png',
        title: '腊烧饭',
        isActive: false
      }
    ],
    // 渲染轮播图的数组
    img_arr: ["1.jpg","2.jpg","7.jpg","4.jpg","5.jpg","6.jpg"],
    // 渲染tabbar样式的 数组
    tabs: [
      {
        id: 0,
        name: '精品水果',
        isActive: true,
        icon: "icon-fruit-fruit"
      },
      {
        id: 1,
        name: '海鲜肉蛋',
        isActive: false,
        icon: "icon-fruit-seafood"
      },
      {
        id: 2,
        name: '超市促销',
        isActive: false,
        icon: "icon-fruit-discounts"
      }
    ]
  },
  // 通过函数改变默认的激活项
  tabbarChange2(e){   
    const {tindex} = e.detail
    let {tabs} = this.data
    tabs.forEach( (item,index) => { index == tindex? item.isActive = true : item.isActive = false })
    this.setData({
      tabs: tabs
    })
  },
  // 点击跳转到 定位的详情页
  handleLocDetail() {
    wx.navigateTo({
      url: '/pages/address/address',
    })
  },
  // 点击中部导航 切换内容展示部分
  handleChange(e) {
    let {id} = e.detail
    let {nav_arr} = this.data
    nav_arr.forEach((item,i) => {item.id==id? item.isActive=true : item.isActive=false})
    this.setData({
      nav_arr
    })
  },
  // 点击店铺进入店铺详情页
  handleStoreDetail(e) {
    let {storeid,storename} = e.detail
    wx.navigateTo({
      url: `/pages/shops/shops?storeid=${storeid}&storename=${storename}`,
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
    // console.log(scroll_top)
    if(e.scrollTop>175 && this.data.is_hidden){
      this.setData({
        is_hidden: false
      })
    }
    if(e.scrollTop<175){
      this.setData({
        is_hidden: true
      })
    }
  }
})