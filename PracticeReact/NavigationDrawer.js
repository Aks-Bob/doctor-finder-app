import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const NavigationDrawer = () => {
  return (
      <View>
          <Text style={ styles.text}> Drawer on the { drawerPosition }! </Text>
          <Button title='Change Drawer Position'/>
          <Text> Swipe from the side or press button below to see it! </Text>
          <Button title='Open drawer'/>
    </View>
  )
}


const styles = StyleSheet.create({
    text: {
        padding: 16,
        fontSize: 15,
        textAlign: 'center',
        color: '#000',
    }
})
export default NavigationDrawer;