import React, { useEffect } from "react"
import { View, Text, StyleSheet, SafeAreaView } from "react-native"
import { PriceItem } from "../components/PriceItem"
import { FlatList } from "react-native-gesture-handler"
import { useDispatch, useSelector } from "react-redux"
import { loadAllProducts } from "../store/actions/productions"
import {ProductItem} from '../components/ProductItem'
export const ProductList = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadAllProducts())
    }, [dispatch])

    const allProducts = useSelector((state) => state.product.allProducts)

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <PriceItem priceItem={props.navigation.state.params} onOpen={() => {}}></PriceItem>
                <Text style={{ height: 100, marginHorizontal: 12, marginVertical: 10 }}>{props.navigation.state.params.text}</Text>
            </View>
            <SafeAreaView>
                {/* <FlatList
                    data={allProducts}
                    keyExtractor={(producItem) => producItem.id.toString()}
                    renderItem={({ item }) => <ProductItem style={styles.center} priceItem={item} onOpen={() => {}} />}
                /> */}
                {/* <Text>{JSON.stringify(props)}</Text> */}
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        // justifyContent: 'center',
        alignItems: "center",
    },
    header: {
        height: 110,
        width: "100%",
    },
})
