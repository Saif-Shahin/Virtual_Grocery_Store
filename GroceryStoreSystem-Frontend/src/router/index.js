import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Checkout from '@/components/Checkout'
import Register from '@/components/Register'
import OwnerFunctions from '@/components/OwnerFunctions'
import ManageEmployees from '@/components/ManageEmployees'
import EmployeeFunctions from '@/components/EmployeeFunctions'
import MyAccount from '@/components/MyAccount'
import Cart from '@/components/Cart'
import AccountOrders from '@/components/AccountOrders'
import Orders from '@/components/Orders'
import Items from '@/components/Items'
import Blacklist from '@/components/Blacklist'
import CreateCustomerAcc from '@/components/CreateCustomerAcc'
import ManageInventory from '@/components/ManageInventory'
import ThankYou from '@/components/ThankYou'
import UpdateStore from '@/components/UpdateStore'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },

    {
      path: '/register',
      name: 'Register',
      component: Register
    },

    {
      path: '/manageEmployees',
      name: 'ManageEmployees',
      component: ManageEmployees
    },

    {
      path: '/ownerfunctions',
      name: 'OwnerFunctions',
      component: OwnerFunctions
    },

    {
      path: '/employeefunctions',
      name: 'EmployeeFunctions',
      component: EmployeeFunctions
    },
    
    {
      path: '/account',
      name: 'MyAccount',
      component: MyAccount
    },
    
    {
      path: '/account/orders',
      name: 'AccountOrders',
      component: AccountOrders
    },
    
    {
      path: '/orders',
      name: 'Orders',
      component: Orders
    },
    
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    
    {
      path: '/thankyou',
      name: 'ThankYou',
      component: ThankYou
    },
    {
      path: '/items',
      name: 'Items',
      component: Items
    },
    
    {
      path: '/blacklist',
      name: 'Blacklist',
      component: Blacklist
    },
    
    {
      path: '/createcustomeracc',
      name: 'CreateCustomerAcc',
      component: CreateCustomerAcc
    },
    
    {
      path: '/manageinventory',
      name: 'ManageInventory',
      component: ManageInventory
    },
    
    {
      path: '/updateStore',
      name: 'UpdateStore',
      component: UpdateStore
    }

  ]
})
