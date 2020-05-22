// pages/store/store.js
Page({

  data: {
    // 店铺列表数据
    list_arr: [
      {
        ava: 'dish.png',
        name: '重庆川菜馆',
        grade: '9.7',
        amount: 3450,
        sendmin:20,
        discounts: ['20减6','50减18','100减42','150减67',],
        recommend: [
          {
            img: '1.jpg',
            name: '水煮鱼',
            new_price: 43,
            old_price: 55
          },
          {
            img: '2.jpg',
            name: '毛血旺',
            new_price: 43,
            old_price: 55
          },
          {
            img: '3.gif',
            name: '猪肚鸡',
            new_price: 43,
            old_price: 55
          },
          {
            img: '4.jpg',
            name: '得莫利炖鱼',
            new_price: 43,
            old_price: 55
          },
          {
            img: '5.jpg',
            name: '酸菜鱼',
            new_price: 43,
            old_price: 55
          },
          {
            img: '6.jpg',
            name: '麻婆豆腐',
            new_price: 43,
            old_price: 55
          },
          {
            img: '7.jpg',
            name: '麻辣牛蛙',
            new_price: 43,
            old_price: 55
          },
        ],
      },
      {
        ava: 'barbecue.png',
        name: '大旺烧烤店',
        grade: '8.6',
        amount: 2560,
        sendmin:15,
        discounts: ['20减6','50减18','100减42','150减67',],
        recommend: [
          {
            img: '1.jpg',
            name: '水煮鱼',
            new_price: 43,
            old_price: 55
          },
          {
            img: '2.jpg',
            name: '毛血旺',
            new_price: 43,
            old_price: 55
          },
          {
            img: '3.gif',
            name: '猪肚鸡',
            new_price: 43,
            old_price: 55
          },
          {
            img: '4.jpg',
            name: '得莫利炖鱼',
            new_price: 43,
            old_price: 55
          },
          {
            img: '5.jpg',
            name: '酸菜鱼',
            new_price: 43,
            old_price: 55
          },
          {
            img: '6.jpg',
            name: '麻婆豆腐',
            new_price: 43,
            old_price: 55
          },
          {
            img: '7.jpg',
            name: '麻辣牛蛙',
            new_price: 43,
            old_price: 55
          },
        ],
      },
      {
        ava: 'pepper.png',
        name: '张记麻辣烫',
        grade: '9.9',
        amount: 5675,
        sendmin:20,
        discounts: ['20减6','50减18','100减42','150减67',],
        recommend: [
          {
            img: '1.jpg',
            name: '水煮鱼',
            new_price: 43,
            old_price: 55
          },
          {
            img: '2.jpg',
            name: '毛血旺',
            new_price: 43,
            old_price: 55
          },
          {
            img: '3.gif',
            name: '猪肚鸡',
            new_price: 43,
            old_price: 55
          },
          {
            img: '4.jpg',
            name: '得莫利炖鱼',
            new_price: 43,
            old_price: 55
          },
          {
            img: '5.jpg',
            name: '酸菜鱼',
            new_price: 43,
            old_price: 55
          },
          {
            img: '6.jpg',
            name: '麻婆豆腐',
            new_price: 43,
            old_price: 55
          },
          {
            img: '7.jpg',
            name: '麻辣牛蛙',
            new_price: 43,
            old_price: 55
          },
        ],
      },
      {
        ava: 'noodles.png',
        name: '兰州拉面',
        grade: '9.8',
        amount: 3453,
        sendmin:25,
        discounts: ['20减6','50减18','100减42','150减67',],
        recommend: [
          {
            img: '1.jpg',
            name: '水煮鱼',
            new_price: 43,
            old_price: 55
          },
          {
            img: '2.jpg',
            name: '毛血旺',
            new_price: 43,
            old_price: 55
          },
          {
            img: '3.gif',
            name: '猪肚鸡',
            new_price: 43,
            old_price: 55
          },
          {
            img: '4.jpg',
            name: '得莫利炖鱼',
            new_price: 43,
            old_price: 55
          },
          {
            img: '5.jpg',
            name: '酸菜鱼',
            new_price: 43,
            old_price: 55
          },
          {
            img: '6.jpg',
            name: '麻婆豆腐',
            new_price: 43,
            old_price: 55
          },
          {
            img: '7.jpg',
            name: '麻辣牛蛙',
            new_price: 43,
            old_price: 55
          },
        ],
      },
      {
        ava: 'hamburger.png',
        name: '华莱士汉堡',
        grade: '9.6',
        amount: 7689,
        sendmin:30,
        discounts: ['20减6','50减18','100减42','150减67',],
        recommend: [
          {
            img: '1.jpg',
            name: '水煮鱼',
            new_price: 43,
            old_price: 55
          },
          {
            img: '2.jpg',
            name: '毛血旺',
            new_price: 43,
            old_price: 55
          },
          {
            img: '3.gif',
            name: '猪肚鸡',
            new_price: 43,
            old_price: 55
          },
          {
            img: '4.jpg',
            name: '得莫利炖鱼',
            new_price: 43,
            old_price: 55
          },
          {
            img: '5.jpg',
            name: '酸菜鱼',
            new_price: 43,
            old_price: 55
          },
          {
            img: '6.jpg',
            name: '麻婆豆腐',
            new_price: 43,
            old_price: 55
          },
          {
            img: '7.jpg',
            name: '麻辣牛蛙',
            new_price: 43,
            old_price: 55
          },
        ],
      },
      {
        ava: 'rice.png',
        name: '特色腊烧饭',
        grade: '9.3',
        amount: 5463,
        sendmin:15,
        discounts: ['20减6','50减18','100减42','150减67',],
        recommend: [
          {
            img: '1.jpg',
            name: '水煮鱼',
            new_price: 43,
            old_price: 55
          },
          {
            img: '2.jpg',
            name: '毛血旺',
            new_price: 43,
            old_price: 55
          },
          {
            img: '3.gif',
            name: '猪肚鸡',
            new_price: 43,
            old_price: 55
          },
          {
            img: '4.jpg',
            name: '得莫利炖鱼',
            new_price: 43,
            old_price: 55
          },
          {
            img: '5.jpg',
            name: '酸菜鱼',
            new_price: 43,
            old_price: 55
          },
          {
            img: '6.jpg',
            name: '麻婆豆腐',
            new_price: 43,
            old_price: 55
          },
          {
            img: '7.jpg',
            name: '麻辣牛蛙',
            new_price: 43,
            old_price: 55
          },
        ],
      },
      {
        ava: 'barbecue.png',
        name: '冰沙奶茶店',
        grade: '8.8',
        amount: 9239,
        sendmin:18,
        discounts: ['20减6','50减18','100减42','150减67',],
        recommend: [
          {
            img: '1.jpg',
            name: '水煮鱼',
            new_price: 43,
            old_price: 55
          },
          {
            img: '2.jpg',
            name: '毛血旺',
            new_price: 43,
            old_price: 55
          },
          {
            img: '3.gif',
            name: '猪肚鸡',
            new_price: 43,
            old_price: 55
          },
          {
            img: '4.jpg',
            name: '得莫利炖鱼',
            new_price: 43,
            old_price: 55
          },
          {
            img: '5.jpg',
            name: '酸菜鱼',
            new_price: 43,
            old_price: 55
          },
          {
            img: '6.jpg',
            name: '麻婆豆腐',
            new_price: 43,
            old_price: 55
          },
          {
            img: '7.jpg',
            name: '麻辣牛蛙',
            new_price: 43,
            old_price: 55
          },
        ],
      },
      {
        ava: 'allfood.png',
        name: '东北菜馆',
        grade: '9.1',
        amount: 8890,
        sendmin:30,
        discounts: ['20减6','50减18','100减42','150减67',],
        recommend: [
          {
            img: '1.jpg',
            name: '水煮鱼',
            new_price: 43,
            old_price: 55
          },
          {
            img: '2.jpg',
            name: '毛血旺',
            new_price: 43,
            old_price: 55
          },
          {
            img: '3.gif',
            name: '猪肚鸡',
            new_price: 43,
            old_price: 55
          },
          {
            img: '4.jpg',
            name: '得莫利炖鱼',
            new_price: 43,
            old_price: 55
          },
          {
            img: '5.jpg',
            name: '酸菜鱼',
            new_price: 43,
            old_price: 55
          },
          {
            img: '6.jpg',
            name: '麻婆豆腐',
            new_price: 43,
            old_price: 55
          },
          {
            img: '7.jpg',
            name: '麻辣牛蛙',
            new_price: 43,
            old_price: 55
          },
        ],
      },
      {
        ava: 'chafingdish.png',
        name: '川湘火锅店',
        grade: '9.1',
        amount: 2345,
        sendmin:20,
        discounts: ['20减6','50减18','100减42','150减67',],
        recommend: [
          {
            img: '1.jpg',
            name: '水煮鱼',
            new_price: 43,
            old_price: 55
          },
          {
            img: '2.jpg',
            name: '毛血旺',
            new_price: 43,
            old_price: 55
          },
          {
            img: '3.gif',
            name: '猪肚鸡',
            new_price: 43,
            old_price: 55
          },
          {
            img: '4.jpg',
            name: '得莫利炖鱼',
            new_price: 43,
            old_price: 55
          },
          {
            img: '5.jpg',
            name: '酸菜鱼',
            new_price: 43,
            old_price: 55
          },
          {
            img: '6.jpg',
            name: '麻婆豆腐',
            new_price: 43,
            old_price: 55
          },
          {
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
        icon: 'juice.png',
        title: '奶茶果汁',
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
        icon: 'barbecue.png',
        title: '烧烤炸鸡',
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
        name: '美食奶茶',
        isActive: true,
        icon: "icon-store-cate"
      },
      {
        id: 1,
        name: '优惠热卖',
        isActive: false,
        icon: "icon-store-discounts"
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
      url: '/pages/store/address/address',
    })
  },
  // 点击中部导航 切换内容展示部分
  handleNavChange(e) {
    let {index} = e.currentTarget.dataset
    let {nav_arr} = this.data
    nav_arr.forEach((item,i) => {i==index? item.isActive=true : item.isActive= false})
    this.setData({
      nav_arr
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