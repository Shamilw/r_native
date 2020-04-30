import React,{useEffect} from 'react'
import { View, Text, StyleSheet,Alert,FlatList,SafeAreaView } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { useDispatch, useSelector } from 'react-redux'
import {loadPriceArr} from '../store/actions/priceArr'
import {PriceItem} from '../components/PriceItem'
import THEME from '../theme'

export const PriceList = (props) => {
  const openPriceListHandler = price => {
    navigation.navigate('Price', {
      id: price.id,
      date: price.date
    })
  }

  const onOpen = price=> {
    props.navigation.navigate('Product', price);
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadPriceArr())
  }, [dispatch])

  const allPriceArr = useSelector(state => state.price.allPriceArr)

  return (
    <SafeAreaView  style={styles.container}>
      <FlatList
        data={allPriceArr}
        keyExtractor={priceItem => priceItem.id.toString()}
        renderItem={({ item }) => <PriceItem style={styles.center} priceItem={item} onOpen={onOpen} />}
      />
       </SafeAreaView>
   
  )
}

PriceList.navigationOptions = {
  headerTitle: 'Прайс-листы',
  headerStyle:{},
  headerRight:(props)=> {
    const  btnhandler=(props)=>{
      // console.log({props})
      Alert.alert('info','info_massage')
    }
    
    return(
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            style={styles.item}
            title='Take photo'
            iconName='info-circle'
            onPress={() =>{btnhandler(props)}}
          />      
      </HeaderButtons>
    )
}
}



const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height:110
  },
  item:{
    marginRight:20,
  },
  container: {
    flex: 1
  },
})
