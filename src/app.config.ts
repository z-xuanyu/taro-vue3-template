import { TabBarItem } from '@tarojs/taro'

export default defineAppConfig({
  pages: ['pages/index/index', 'pages/user/index', 'pages/cart/index', 'pages/category/index'],
  window: {
    backgroundColor: '#fff',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  subpackages: [
    {
      root: 'pages/featureA',
      pages: ['index/index', 'nutui/index', 'request/index', 'css/index'],
    },
  ],
  tabBar: {
    color: '#C0C4CC',
    selectedColor: '#ff6a6c',
    backgroundColor: '#fff',
    borderStyle: 'black',
    custom: false,
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './assets/images/tabbar/home.png',
        selectedIconPath: './assets/images/tabbar/home_active.png',
      },
      {
        pagePath: 'pages/category/index',
        text: '分类',
        iconPath: './assets/images/tabbar/category.png',
        selectedIconPath: './assets/images/tabbar/category_active.png',
      },
      {
        pagePath: 'pages/cart/index',
        text: '购物车',
        iconPath: './assets/images/tabbar/cart.png',
        selectedIconPath: './assets/images/tabbar/cart_active.png',
      },
      {
        pagePath: 'pages/user/index',
        text: '我的',
        iconPath: './assets/images/tabbar/user.png',
        selectedIconPath: './assets/images/tabbar/user_active.png',
      },
    ] as TabBarItem[],
  },
})
