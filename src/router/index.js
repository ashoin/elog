import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginHome from '../views/LoginHome.vue'
import Login from '../components/login/Login.vue'
import ForgetPassword from '../components/login/ForgetPassword.vue'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Location from '../views/Location.vue'
import ShoppingDetail from '../views/ShoppingDetail.vue'
import ShoppingAllEvalute from '../components/shopping/ShoppingAllEvalute.vue'
import ShoppingSearch from '../components/shopping/ShoppingSearch.vue'
import Cart from '../views/Cart.vue'
import CartMessage from '../views/cart/CartMessage.vue'
import CartOrder from '../views/cart/CartOrder.vue'
import OrderPay from '../views/cart/cartorder/OrderPay.vue'
import Mine from '../views/Mine.vue'
import MineSetting from '../views/mine/MineSetting.vue'
import MineUserInfo from '../views/mine/MineUserInfo.vue'
import MineAllOrder from '../views/mine/MineAllOrder.vue'
import MineRefund from '../views/mine/MineRefund.vue'
import SettingAbout from '../views/mine/mineSetting/SettingAbout.vue'
import SettingMessage from '../views/mine/mineSetting/SettingMessage.vue'
import UserAddress from '../views/mine/mineUserInfo/UserAddress.vue'
import UserAuthentic from '../views/mine/mineUserInfo/UserAuthentic.vue'
import AddressAdd from '../views/mine/mineUserInfo/userAddress/AddressAdd.vue'
import OrderDetail from '../views/mine/mineAllOrder/OrderDetail.vue'
import OrderSendDetail from '../views/mine/mineAllOrder/OrderSendDetail.vue'
import OrderLogistics from '../views/mine/mineAllOrder/OrderLogistics.vue'
import OrderDeliveryDetail from '../views/mine/mineAllOrder/OrderDeliveryDetail.vue'
import OrderRefund from '../views/mine/mineAllOrder/OrderRefund.vue'
import OrderEvaluate from '../views/mine/mineAllOrder/OrderEvaluate.vue'
import OrderEvaluateDetail from '../views/mine/mineAllOrder/OrderEvaluateDetail.vue'
import OrderComplain from '../views/mine/mineAllOrder/OrderComplain.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'LoginHome',
  component: LoginHome
}, {
  path: '/login',
  name: 'Login',
  component: Login
}, {
  path: '/forgetpassword',
  name: 'ForgetPassword',
  component: ForgetPassword
}, {
  path: '/home',
  name: 'Home',
  component: Home
}, {
  path: '/category',
  name: 'Category',
  component: Category
}, {
  path: '/home/location',
  name: 'Location',
  component: Location
}, {
  path: '/shopping',
  name: 'ShoppingDetail',
  component: ShoppingDetail
}, {
  path: '/evalute',
  name: "ShoppingAllEvalute",
  component: ShoppingAllEvalute
}, {
  path: '/home/search',
  name: 'ShoppingSearch',
  component: ShoppingSearch
}, {
  path: '/cart',
  name: 'Cart',
  component: Cart
}, {
  path: '/cart/message',
  name: 'CartMessage',
  component: CartMessage
}, {
  path: '/cart/order',
  name: 'CartOrder',
  component: CartOrder
}, {
  path: '/cart/order/pay',
  name: 'OrderPay',
  component: OrderPay
}, {
  path: '/mine',
  name: 'Mine',
  component: Mine
}, {
  path: '/mine/setting',
  name: 'MineSetting',
  component: MineSetting
}, {
  path: '/mine/user',
  name: 'MineUserInfo',
  component: MineUserInfo
}, {
  path: '/mine/order',
  name: 'MineAllOrder',
  component: MineAllOrder
}, {
  path: '/mine/refund',
  name: "MineRefund",
  component: MineRefund
}, {
  path: '/mine/setting/about',
  name: 'SettingAbout',
  component: SettingAbout
}, {
  path: '/mine/setting/message',
  name: 'SettingMessage',
  component: SettingMessage
}, {
  path: '/mine/user/address',
  name: 'UserAddress',
  component: UserAddress
}, {
  path: '/mine/user/authentic',
  name: 'UserAuthentic',
  component: UserAuthentic
}, {
  path: '/mine/user/address/add',
  name: 'AddressAdd',
  component: AddressAdd
}, {
  path: '/mine/order/detail',
  name: 'OrderDetail',
  component: OrderDetail
}, {
  path: '/mine/order/send',
  name: 'OrderSendDetail',
  component: OrderSendDetail
}, {
  path: '/mine/order/logistics',
  name: 'OrderLogistics',
  component: OrderLogistics
}, {
  path: '/mine/order/delivery',
  name: "OrderDeliveryDetail",
  component: OrderDeliveryDetail
}, {
  path: '/mine/order/refund',
  name: 'OrderRefund',
  component: OrderRefund
}, {
  path: '/mine/order/evaluate',
  name: 'OrderEvaluate',
  component: OrderEvaluate
}, {
  path: '/mine/order/evaluate/detail',
  name: 'OrderEvaluateDetail',
  component: OrderEvaluateDetail
}, {
  path: '/mine/order/evaluate/complain',
  name: 'OrderComplain',
  component: OrderComplain
}]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

// 导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/' || to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
    // console.log(token)
    if (token === null || token === '') {
      alert("登录已经过期，请重新登录")
      next({
        path: '/login'
      });
    } else {
      next();
    }
  }
});

export default router