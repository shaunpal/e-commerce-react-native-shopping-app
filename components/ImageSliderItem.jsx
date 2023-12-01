import React from 'react'
import { View, Image,StyleSheet, Dimensions } from "react-native"

const { width, height } = Dimensions.get('window')

const CustomSlideItem = ({ index, item, style, width }) => {
    return (
        <View key={index} style={styles.slider}>
            <Image
                resizeMode={'contain'} 
                style={styles.slider}
                source={{ uri: item.loc }} 
            />
        </View>

    );
}

const styles = StyleSheet.create({
    slider: {
      width: width,
      height: height/3,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    }
  });

  export default CustomSlideItem;