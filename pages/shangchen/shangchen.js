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
            '/images/fenlei.png',
            '/images/hufu.png',
            '/images/meizhuang.png',
            '/images/pinpai.png',
            '/images/remen.png',
            '/images/xinpin.png'
          ],
          descs: [
            '分类',
            '热门',
            '新品',
            '品牌',
            '护肤',
            '美妆'
          ]
        }
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
        wx.request({
              url: 'https://www.apiopen.top/weatherApi?city=%E4%B8%8A%E6%B5%B7',
              header: 
              {
                'content-type': 'application/json'
              },
              success: res => 
              {
                console.log(res.data)
                this.setData(
                {
                  list: res.data.data
                })
              }
        })
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