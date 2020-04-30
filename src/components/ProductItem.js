import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { THEME } from "../theme";
import { Asset } from "expo-asset";
const imageURI = Asset.fromModule(require("../../assets/img01.png")).uri;


export const ProductItem = ({ priceItem, onOpen }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={() =>onOpen(priceItem)}
    >
      <View style={styles.content}>
          <View style={styles.imageWrap}>
              <Image style={styles.image} source={{ uri: imageURI }} />
          </View>
        

        <View style={styles.allTextWrap}>
            <View style={styles.text}>
                <Text style={ { color: THEME.ORANGE_COLOR, fontFamily: "regular", }}>
                {priceItem.name}
                </Text>
            </View>
            <View style={styles.text} >
                <Text style={{ fontSize: 20, fontFamily: "bold" }}>
                {priceItem.category}
                </Text>
            </View>
            <View style={styles.text}>
                <Text style={{ color: THEME.MAIN_GREY, fontFamily: "regular",}}>
                {new Date(priceItem.date).toLocaleDateString()}
                </Text>
            </View>
        </View>

        <View style={styles.newPrice}>
          {priceItem.new 
          ? <Text style={styles.newLabel}>{priceItem.new}</Text>
          : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginTop: 15,
    backgroundColor: THEME.BG_COLOR,
    elevation: 7,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    height:110
    
  },
  content: {
    width: "100%",
    paddingHorizontal: 16,
    height: 110,
    backgroundColor: "white",
    flexDirection: "row",
    flex: 1,
    

  },

  imageWrap: {
      flex:2,
      paddingVertical: 20,
  },
  image: {
   
    width: 80,
    height: 80,
  },

  allTextWrap: {
    flex: 5,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: 'center',
    height: "100%",
    paddingVertical:10
  },
  text: {
    flex: 1,
    alignContent:'center',
    justifyContent:'center'
  },

  newPrice: {
    flex: 1.1,
    justifyContent: "center",
    alignContent: "center",
  },
  newLabel: {
    flexDirection:'row',
    height: 35,
    paddingHorizontal:12,
    paddingVertical:7,
    borderRadius: 15,
    backgroundColor: THEME.GREEN_COLOR,

    justifyContent: "center",
    alignContent: "center",
  },
});
