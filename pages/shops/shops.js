// pages/shops/shops.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shops_info: {
      img: '7.jpg',
      name: '川湘菜馆'
    },
    content_title: '',
    nav_arr: [
      {
        id: 0,
        title: '点餐',
        isActive: true
      },
      {
        id: 1,
        title: '评价',
        isActive: false
      },
      {
        id: 2,
        title: '商家',
        isActive: false
      }
    ],
    food_arr: [
      {
        id: 0,
        type_name: '本店特惠',
        isActive: true,
        children: [
          {
            food_id: 11,
            img: '5.jpg',
            price: 20,
            food_name: '炒芹菜'
          },
          {
            food_id: 12,
            img: '1.jpg',
            price: 29,
            food_name: '炒土豆丝'
          },
          {
            food_id: 13,
            img: '2.jpg',
            price: 16,
            food_name: '酸菜鱼'
          },
          {
            food_id: 14,
            img: '3.gif',
            price: 32,
            food_name: '水煮鱼'
          },
          {
            food_id: 15,
            img: '4.jpg',
            price: 20,
            food_name: '家常凉菜'
          }
        ]
      },
      {
        id: 1,
        type_name: '本店套餐',
        isActive: false,
        
        children: [
          {
            food_id: 12,
            img: '4.jpg',
            price: 29,
            food_name: '炒土豆丝'
          },
          {
            food_id: 13,
            img: '6.jpg',
            price: 16,
            food_name: '酸菜鱼'
          },
          {
            food_id: 14,
            img: '3.gif',
            price: 32,
            food_name: '水煮鱼'
          },
          {
            food_id: 15,
            img: '7.jpg',
            price: 20,
            food_name: '家常凉菜'
          }
        ]
      },
      {
        id: 2,
        type_name: '美味小炒',
        isActive: false,
        
        children: [
          {
            food_id: 11,
            img: '6.jpg',
            price: 20,
            food_name: '炒芹菜'
          },
          {
            food_id: 12,
            img: '4.jpg',
            price: 29,
            food_name: '炒土豆丝'
          },
          {
            food_id: 13,
            img: '3.gif',
            price: 16,
            food_name: '酸菜鱼'
          },
          {
            food_id: 14,
            img: '5.jpg',
            price: 32,
            food_name: '水煮鱼'
          },
          {
            food_id: 15,
            img: '2.jpg',
            price: 20,
            food_name: '家常凉菜'
          },
          {
            food_id: 17,
            img: '7.jpg',
            price: 42,
            food_name: '麻辣小龙虾'
          },
        ]
      },
      {
        id: 3,
        type_name: '特色炖菜',
        isActive: false,
        
        children: [
          {
            food_id: 11,
            img: '5.jpg',
            price: 20,
            food_name: '炒芹菜'
          },
          {
            food_id: 12,
            img: '1.jpg',
            price: 29,
            food_name: '炒土豆丝'
          },
          {
            food_id: 13,
            img: '2.jpg',
            price: 16,
            food_name: '酸菜鱼'
          },
          {
            food_id: 14,
            img: '3.gif',
            price: 32,
            food_name: '水煮鱼'
          }
        ]
      },
      {
        id: 4,
        type_name: '营养汤类',
        isActive: false,
        
        children: [
          {
            food_id: 11,
            img: '5.jpg',
            price: 20,
            food_name: '炒芹菜'
          },
          {
            food_id: 12,
            img: '1.jpg',
            price: 29,
            food_name: '炒土豆丝'
          },
          {
            food_id: 13,
            img: '2.jpg',
            price: 16,
            food_name: '酸菜鱼'
          },
          {
            food_id: 14,
            img: '3.gif',
            price: 32,
            food_name: '水煮鱼'
          }
        ]
      },
      {
        id: 5,
        type_name: '海鲜类',
        isActive: false,
        
        children: [
          {
            food_id: 11,
            img: '5.jpg',
            price: 20,
            food_name: '炒芹菜'
          },
          {
            food_id: 12,
            img: '1.jpg',
            price: 29,
            food_name: '炒土豆丝'
          },
          {
            food_id: 13,
            img: '2.jpg',
            price: 16,
            food_name: '酸菜鱼'
          },
          {
            food_id: 14,
            img: '3.gif',
            price: 32,
            food_name: '水煮鱼'
          },
          {
            food_id: 15,
            img: '4.jpg',
            price: 20,
            food_name: '家常凉菜'
          }
        ]
      },
      {
        id: 6,
        type_name: '川湘菜',
        isActive: false,
        
        children: [
          {
            food_id: 11,
            img: '5.jpg',
            price: 20,
            food_name: '炒芹菜'
          },
          {
            food_id: 12,
            img: '1.jpg',
            price: 29,
            food_name: '炒土豆丝'
          },
          {
            food_id: 13,
            img: '2.jpg',
            price: 16,
            food_name: '酸菜鱼'
          },
          {
            food_id: 14,
            img: '3.gif',
            price: 32,
            food_name: '水煮鱼'
          },
          {
            food_id: 15,
            img: '4.jpg',
            price: 20,
            food_name: '家常凉菜'
          }
        ]
      },
      {
        id: 7,
        type_name: '凉拌菜',
        isActive: false,
        
        children: [
          {
            food_id: 11,
            img: '5.jpg',
            price: 20,
            food_name: '炒芹菜'
          },
          {
            food_id: 12,
            img: '1.jpg',
            price: 29,
            food_name: '炒土豆丝'
          },
          {
            food_id: 13,
            img: '2.jpg',
            price: 16,
            food_name: '酸菜鱼'
          },
          {
            food_id: 14,
            img: '3.gif',
            price: 32,
            food_name: '水煮鱼'
          },
          {
            food_id: 15,
            img: '4.jpg',
            price: 20,
            food_name: '家常凉菜'
          }
        ]
      },
      {
        id: 8,
        type_name: '特色炖菜',
        isActive: false,
        
        children: [
          {
            food_id: 11,
            img: '5.jpg',
            price: 20,
            food_name: '炒芹菜'
          },
          {
            food_id: 12,
            img: '1.jpg',
            price: 29,
            food_name: '炒土豆丝'
          },
          {
            food_id: 13,
            img: '2.jpg',
            price: 16,
            food_name: '酸菜鱼'
          },
          {
            food_id: 14,
            img: '3.gif',
            price: 32,
            food_name: '水煮鱼'
          },
          {
            food_id: 15,
            img: '4.jpg',
            price: 20,
            food_name: '家常凉菜'
          }
        ]
      },
      {
        id: 9,
        type_name: '精美炒菜',
        isActive: false,
        
        children: [
          {
            food_id: 11,
            img: '5.jpg',
            price: 20,
            food_name: '炒芹菜'
          },
          {
            food_id: 12,
            img: '1.jpg',
            price: 29,
            food_name: '炒土豆丝'
          },
          {
            food_id: 13,
            img: '2.jpg',
            price: 16,
            food_name: '酸菜鱼'
          },
          {
            food_id: 14,
            img: '3.gif',
            price: 32,
            food_name: '水煮鱼'
          },
          {
            food_id: 15,
            img: '4.jpg',
            price: 20,
            food_name: '家常凉菜'
          }
        ]
      },
      {
        id: 10,
        type_name: '店长推荐',
        isActive: false,
        
        children: [
          {
            food_id: 11,
            img: '5.jpg',
            price: 20,
            food_name: '炒芹菜'
          },
          {
            food_id: 12,
            img: '1.jpg',
            price: 29,
            food_name: '炒土豆丝'
          },
          {
            food_id: 13,
            img: '2.jpg',
            price: 16,
            food_name: '酸菜鱼'
          },
          {
            food_id: 14,
            img: '3.gif',
            price: 32,
            food_name: '水煮鱼'
          },
          {
            food_id: 15,
            img: '4.jpg',
            price: 20,
            food_name: '家常凉菜'
          }
        ]
      },
      {
        id:11,
        type_name: '粤菜类',
        isActive: false,
        
        children: [
          {
            food_id: 11,
            img: '5.jpg',
            price: 20,
            food_name: '炒芹菜'
          },
          {
            food_id: 12,
            img: '1.jpg',
            price: 29,
            food_name: '炒土豆丝'
          },
          {
            food_id: 13,
            img: '2.jpg',
            price: 16,
            food_name: '酸菜鱼'
          },
          {
            food_id: 14,
            img: '3.gif',
            price: 32,
            food_name: '水煮鱼'
          },
          {
            food_id: 15,
            img: '4.jpg',
            price: 20,
            food_name: '家常凉菜'
          }
        ]
      },
      {
        id: 12,
        type_name: '主食饮料',
        isActive: false,
        
        children: [
          {
            food_id: 11,
            img: '5.jpg',
            price: 20,
            food_name: '炒芹菜'
          },
          {
            food_id: 12,
            img: '1.jpg',
            price: 29,
            food_name: '炒土豆丝'
          },
          {
            food_id: 13,
            img: '2.jpg',
            price: 16,
            food_name: '酸菜鱼'
          },
          {
            food_id: 14,
            img: '3.gif',
            price: 32,
            food_name: '水煮鱼'
          },
          {
            food_id: 15,
            img: '4.jpg',
            price: 20,
            food_name: '家常凉菜'
          }
        ]
      }
    ]
  },
  // 点击切换中部导航
handleNavChange(e) {
  let {index} = e.currentTarget.dataset
  let {nav_arr} = this.data
  nav_arr.forEach((item,i) => {i==index? item.isActive=true : item.isActive=false})
  this.setData({
    nav_arr
  })
},
  // 点击侧边栏导航
handleSideChange(e) {
  let {index} = e.currentTarget.dataset
  let {food_arr} = this.data
  food_arr.forEach((item,i) => {
    i==index? item.isActive=true : item.isActive=false
  })
  this.setData({
    food_arr,
    content_title: this.data.food_arr[index].type_name
  })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let {storeid,storename} = options
    let {shops_info} = this.data
    shops_info.name = storename
    this.setData({
      shops_info,
      content_title: this.data.food_arr[0].type_name
    })
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