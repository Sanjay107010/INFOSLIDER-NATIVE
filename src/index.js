import React, { useRef, useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    image: "sdf",
    text: 'This is Introduction slide one',
  },
  {
    image: "sdf",
    text: 'This is Introduction slide two',
  },
  {
    image: "sefs",
    text: 'This is Introduction slide three',
  },
];

const IntroScreen = ({ navigation }) => {
  const [key, setKey] = useState(0);
  const slider = useRef(undefined);
  const renderItem = ({ item }) => {
    return (
      <View style={styles.slider}>
        {/* <Image style={styles.image} source={item.image} /> */}
        <Text style={styles.introText}>{item.text}</Text>
      </View>
    );
  };
  const _renderPagination = activeIndex => {
    return (
      <View>
        <View style={styles.paginationView}>
          <View style={styles.dotContainer}>
            {slides.length > 1 &&
              slides.map((_, i) => (
                <TouchableOpacity
                  key={i}
                  style={
                    i === activeIndex ? styles.activeDotStyle : styles.dotStyle
                  }
                  onPress={() => {
                    slider?.current.goToSlide(i, true);
                    setKey(i);
                  }}
                />
              ))}
          </View>
        </View>
        {key > 1 ? (
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUpScreen')}
            style={styles.doneBtn}>
            <Text style={styles.doneText}>Grab Now</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              slider?.current.goToSlide(key + 1, true);
              setKey(key + 1);
            }}
            style={styles.buttonCircle}>
            {/* <Image
              style={styles.nextArrow} */}
            {/* source={require('../../assets/images/whiteArrow.png')} */}
            {/* /> */}
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppIntroSlider
        activeDotStyle={styles.activeDotStyle}
        dotStyle={styles.dotStyle}
        renderItem={renderItem}
        renderPagination={_renderPagination}
        data={slides}
        showNextButton={true}
        onSlideChange={(a, b) => setKey(a)}
        ref={slider}
      />
    </SafeAreaView>
  );
};
export default IntroScreen;
