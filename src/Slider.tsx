import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';

type Props = {};

const Slider = (props: Props) => {
  const [showRealApp, setshowRealApp] = useState(false);
  const slides = [
    {
      key: 1,
      title: 'Title 1',
      text: 'Description.\nSay something cool',
      //image: require(''),
      backgroundColor: '#59b2ab',
    },
    {
      key: 2,
      title: 'Title 2',
      text: 'Other cool stuff',
      // image: require(''),
      backgroundColor: '#febe29',
    },
    {
      key: 3,
      title: 'Rocket guy',
      text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
      // image: require(''),
      backgroundColor: '#22bcb5',
    },
  ];
  const onDone = () => {
    setshowRealApp(true);
  };
  const onSkip = () => {};
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'yellow',
          alignItems: 'center',
        }}>
        <Text> hello slider</Text>
        <Text>{item.text}</Text>
      </View>
    );
  };
  const renderNextButton = () => {};
  return (
    <View>
      {showRealApp ? (
        <View>
          <Text>hello</Text>
          <TouchableOpacity onPress={() => setshowRealApp(false)}>
            <Text>show intro slider again</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={renderItem}
          onDone={onDone}
          onSkip={onSkip}
          showSkipButton={true}
        />
      )}
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({});
