Page({
  data: {
    img_arr: ["1.jpg","2.jpg","7.jpg","4.jpg","5.jpg","6.jpg"],
    // 店铺列表的数据
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
  },
  // handleFee(e) {  // 这个方法是获得组件对象,需要三点. (1)组件向外触发事件, 并且页面要处理这个事件 (2)data- 绑定一个页面跳转路径 (3)给组件一个class="fee3" (停用)
  //   let url = e.currentTarget.dataset.url
  //   console.log(url)
  //   this.selectComponent('.fee3').handleNav3(url)
  // }
  
})