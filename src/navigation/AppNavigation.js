import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import { FontAwesome } from '@expo/vector-icons'
// import { Platform } from 'react-native'
import { PriceList } from '../screens/PriceList'
import { ProductList } from '../screens/ProductList'
import { EmptyScreen } from '../screens/EmptyScreen'
import { THEME } from '../theme'

const navigatorOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: THEME.BGW_COLOR,
    },
    headerTintColor: THEME.MAIN_COLOR,
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }
}

const PriceNavigator = createStackNavigator(
  {
    Price: PriceList,
    Product: ProductList
  },
  navigatorOptions
)

const EmptyNavigator = createStackNavigator(
  {
    Empty: EmptyScreen
  },
  navigatorOptions
)
const Empty1Navigator = createStackNavigator(
  {
    Empty: EmptyScreen
  },
  navigatorOptions
)

const bottomTabsConfig = {
  
  Empty: {
    screen: EmptyNavigator,
    navigationOptions: {
      tabBarLabel: 'Empty',
      tabBarIcon: info => (
        <FontAwesome name='home' size={30} color={info.tintColor} />
      )
    }
  },

  Price: {
    screen: PriceNavigator,
    navigationOptions: {
      tabBarLabel: 'Все',
      tabBarIcon: info => (
        <FontAwesome name='file-text-o' size={30} color={info.tintColor} />
      )
    }

  },
  Empty1: {
    screen: Empty1Navigator,
    navigationOptions: {
      tabBarLabel: 'Empty',
      tabBarIcon: info => (
        <FontAwesome name='user-circle' size={30} color={info.tintColor} />
      )
    }
  }
  
}

const BottomNavigator = createBottomTabNavigator(
  bottomTabsConfig,
  { 
    initialRouteName: 'Price',
    tabBarOptions: {
      activeTintColor:THEME.ORANGE_COLOR,
      showLabel:false,
      style:{
        height:70
      }
    }
  }
)


export const AppNavigation = createAppContainer(BottomNavigator)
