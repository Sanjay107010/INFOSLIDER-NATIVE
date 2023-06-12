import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Appp from './src/NewSlider';
import Vslider from './src/vslider';
import IntroScreen from './src';
import IntroScreenp from './src/sliderpagination';
import IntroScreenp1 from './src/sliderpagination';

type Props = {};

const App = (props: Props) => {
  return (
    <View style={{backgroundColor: 'red', height: '100%'}}>
      <Vslider navigation={undefined}></Vslider>
      {/* <IntroScreen navigation={undefined}></IntroScreen> */}
      {/* <IntroScreenp navigation={undefined}></IntroScreenp> */}
      {/* <IntroScreenp></IntroScreenp> */}
      {/* <IntroScreenp1></IntroScreenp1> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
