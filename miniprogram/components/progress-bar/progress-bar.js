// components/progress-bar/progress-bar.js
let movableAreaWidth = 0 //可移动区域宽度
let movableViewWidth = 0 //可移动元素宽度
const backgroundAudioManager = wx.getBackgroundAudioManager()
let currentSec = -1 //当前的秒数
let duration = 0 //歌曲总时长
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    showTime:{
      currentTime : '00:10',
      totalTime : '03:00',
    },
    distance : 13.3,
    progress : 10,
  },

  lifetimes : {
    ready(){
      this._bindBGMEvent()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _bindBGMEvent(){
      backgroundAudioManager.onPlay(() =>{
        console.log('onPlay')
      })

      backgroundAudioManager.onStop(() =>{
        console.log('onStop')
      })

      backgroundAudioManager.onPause(() =>{
        console.log('onPause')
      })

      backgroundAudioManager.onWaiting(() =>{
        console.log('onWaiting')
      })

      backgroundAudioManager.onCanplay(() =>{
        console.log('onCanplay')
      })

      backgroundAudioManager.onTimeUpdate(() =>{
        console.log('onTimeUpdate')
      })

      backgroundAudioManager.onEnded(() =>{
        console.log('onEnded')
      })
    }
  }
})
