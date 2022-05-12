/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-12 12:11:06
 * @LastEditTime: 2022-05-12 15:03:05
 * @Description: Modify here please
 */
import { createApp } from 'vue'
import { setupStore } from '@/stores'
import { useSystem } from '@/stores'
import { Button, Icon } from '@nutui/nutui-taro'
import Taro from '@tarojs/taro'
import './app.scss'

const App = createApp({
  // 可以使用所有的 Vue 生命周期方法
  mounted() {},

  // 对应 onLaunch
  onLaunch(options) {
    // 将启动参数放进到全局去
    const system = useSystem()
    system.init(options)
    system.setInfo(Taro.getSystemInfoSync())
  },

  // 对应 onShow
  onShow() {},

  // 对应 onHide
  onHide() {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
App.use(Icon).use(Button)
setupStore(App)
export default App
