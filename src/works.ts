export const info = [
  {
    name: 'Plum', // 梅花
    date: '2024/03/11',
    no: 1,
  },
  {
    name: 'Move', // matterJs应用
    date: '2024/03/13',
    no: 2,
  },
  {
    name: 'LeftMove', // matterJs应用
    date: '2024/03/13',
    no: 3,
  },
  {
    name: 'Scope', // 范围文字显示
    date: '2024/03/18',
    no: 4,
  },
  {
    name: 'TextStereoscopic', // 文字3D效果
    date: '2024/03/23',
    no: 5,
  },
  {
    name: 'Draggable', // 拖拽(进行中)
    date: '2024/04/14',
    no: 6,
  },
  {
    name: 'FreeDrag', // 自由拖放
    no: 7,
  },
  {
    name: 'Video', // 视频播放
    no: 8,
  },
  {
    name: 'Music', // 音乐播放
    no: 9,
  },
  {
    name: 'FileDownload', // 文件下载 / 大文件 / 预览(未进行)
    no: 10,
  },
  {
    name: 'FileUpload', // 文件上传 / 大文件 / 预览(未进行)
    no: 11,
  },
  {
    name: 'Textbus Editor', // 文本编辑器 / 图片粘贴 / 视频粘贴(进行中)
    no: 12,
  },
  {
    name: 'Theme', // 主题切换(未进行)
    no: 13,
  },
  {
    name: 'OCR', // 文字识别(未进行)
    no: 14,
  },
  {
    name: 'Waterfall flow', // 瀑布流(未进行)
    no: 15,
  },
  {
    name: 'View Transitions', // 主题切换动画
    no: 16,
  },
  {
    name: 'weather', // 地区天气(未进行)
    no: 17,
  }

// 二维码生成
// 商品条形码
// JSON格式化
// 代办事项
// PDF转换
// 时间戳转换
// Base64加密
// MD5加密
// 颜色值转换
]

export const works = info.map((info, idx) => {
  return {
    ...info,
    no: `${idx + 1}`.padStart(3, '0'),
  }
})