Page({
    data: {
        title: 'You raise me up',
        
        videoUrl: 'http://cloud.video.taobao.com//play/u/17964054/p/2/e/6/t/1/44659531.mp4'
    },

    onReady: function(res){
        this.videoContext = wx.createVideoContext('myVideo')
    },
    videoErrorCallback: function (e) {
        console.log('不好意思，好像出错了...囧...')
        console.log('e.detail.errMsg')
    }
})