Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    inputShowed: false,
    inputVal: "",
    menu: {
      //图片存放地址
      imgUrls: [
        { src:'/images/fenlei.png',url:'/shangchen/fenlei/fenlei'} ,
        { src:'/images/hufu.png', url: '/shangchen/remen/remen'},
        { src:'/images/meizhuang.png', url: '/shangchen/xinping/xinping'},
        { src:'/images/pinpai.png', url: '/shangchen/pinpai/pinpai'},
        { src:'/images/remen.png', url: '/shangchen/hufu/hufu'},
        { src:'/images/xinpin.png', url: '/shangchen/meizhuang/meizhuang'}
      ],
      descs: [
        '分类',
        '热门',
        '新品',
        '品牌',
        '护肤',
        '美妆'
      ]
    },
    //轮播图
    lunboUrls: [
      'https://gaitaobao1.alicdn.com/tfscom/i2/341149143/O1CN01YtQgza2HPXmAW4GeD_!!341149143.jpg_240x240xz.jpg_.webp',
      'https://gaitaobao3.alicdn.com/tfscom/i3/2670830951/O1CN01aAdCp71Itb8O8OhqU_!!0-item_pic.jpg_240x240xz.jpg_.webp',
      'https://gaitaobao1.alicdn.com/tfscom/i2/2785135471/O1CN01M6WMyA1qHlOgeLuWS_!!0-item_pic.jpg_240x240xz.jpg_.webp',
      'https://gaitaobao3.alicdn.com/tfscom/i2/4192715010/O1CN01s7L0u41mscmX2HdCb_!!4192715010.jpg_240x240xz.jpg_.webp'
      
    ],
    swiperIndex: 0 //这里不写第一次启动小程序展示的时候会有问题
  },
  //点击事件
  bindchange(e) {
    this.setData({
      swiperIndex: e.detail.current
    })
  },
  toMenu0(e){
    wx.navigateTo({
      url: '/pages/fenlei/fenlei'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  //一旦触发拍照事件，则立马跳转到camera
  takePhoto: function() {
    wx.navigateTo({
      url: '../camera/camera'
    })
  },
  //搜索栏的设定
  showInput: function() {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function() {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function() {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function(e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  onLoad: function(options) {
    /*wx.request({
      url: '',
      header: {
        'content-type': 'application/json'
      },
      success: res => {
        console.log(res.data)
        this.setData({
          list: res.data.data
        })
      }
    })*/
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})