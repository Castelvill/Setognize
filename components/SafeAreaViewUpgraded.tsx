import React, {ReactNode} from 'react';
import {Platform, StatusBar, SafeAreaView, StyleSheet, StyleProp, ViewStyle} from 'react-native';

type SafeAreaViewUpgradedType = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const SafeAreaViewUpgraded = ({
  children,
  style
}: SafeAreaViewUpgradedType) => {
  return (
        <SafeAreaView style={[styles.container, style]}>
            {children}
        </SafeAreaView>
    )
};

const styles=StyleSheet.create({
  container:{
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
})
export default SafeAreaViewUpgraded;