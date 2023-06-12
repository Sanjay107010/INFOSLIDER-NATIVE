// import {ScrollView, StyleSheet, Text, View} from 'react-native';
// import React, {useState} from 'react';
// import AppIntroSlider from 'react-native-app-intro-slider';

// type Props = {
//   navigation: any;
// };

// const Vslider = (props: Props) => {
//   const [showSlider, setShowSlider] = useState(true);
//   const Slides = [
//     {
//       key: 1,
//       title: 'hihhhhhhhhhhhhhh',
//       text: 'hhhhhhhhhh',
//     },
//     {
//       key: 2,
//       title: 'helll',
//       text: 'kkkkkk',
//     },
//     {
//       key: 3,
//       title: 'hi',
//       text: 'lllllll',
//     },
//   ];
//   const renderslider = ({item}) => {
//     return (
//       <View>
//         <Text style={styles.title}>{item.title}</Text>
//         <Text style={styles.text}>{item.text}</Text>
//         <Text style={styles.text}>{item.text}</Text>
//         <Text style={styles.text}>{item.text}</Text>
//         <Text style={styles.text}>{item.text}</Text>
//       </View>
//     );
//   };
//   return (
//     <View style={{heigth: '100%'}}>
//       {/* <View style={styles.container}> */}
//       <AppIntroSlider
//         data={Slides}
//         renderItem={renderslider}
//         showSkipButton={true}
//         onDone={() => {
//           setShowSlider(false);
//         }}
//         // onSkip={() => {
//         //   setShowSlider(false);
//         // }}
//       />
//       {/* </View> */}
//     </View>
//   );
// };

// export default Vslider;

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     heigth: '100%',
//     // justifyContent: 'center',
//     // alignItems: 'center',
//   },
//   slide: {
//     backgroundColor: 'red',
//     heigth: '100%',
//   },
// });
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';

const IntroScreen = () => {
  const slides = [
    {
      id: 1,
      title: 'Discover Best Places',
      description: '',
      // image: require('../assets/image/onboardScreen1.png'),
    },
    {
      id: 2,
      title: 'Choose A Tasty Dish',
      description: '',
      // image: require('../assets/image/onboardScreen2.png'),
    },
    {
      id: 3,
      title: 'Pick Up The Delivery',
      description: '',
      // image: require('../assets/image/onboardScreen3.png'),
    },
  ];

  const [showHomePage, setShowHomePage] = useState(false);
  const onDone = () => {
    setShowHomePage(true);
  };
  const onSkip = () => {
    setShowHomePage(true);
  };

  const RenderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#3395ff',
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        {/* <Image style={styles.imageStyle} source={item.image} /> */}
        <Text style={styles.titleStyle}>{item.title}</Text>

        <Text style={styles.descStyle}>{item.description}</Text>
      </View>
    );
  };
  const renderNextButton = () => {
    return <View></View>;
  };

  return (
    <>
      {showHomePage ? (
        <SafeAreaView>
          <View>
            {/* <LoginScreen
                            text="LoginScreen"
                        /> */}
          </View>
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
          renderNextButton={renderNextButton}
        />
      )}
    </>
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    paddingTop: 100,
  },
  imageStyle: {
    // width: SIZES.width - 50,
    height: 400,
  },
  titleStyle: {
    fontWeight: 'bold',
    // color: COLORS.title,
    // fontSize: SIZES.h1,
  },
  descStyle: {
    textAlign: 'center',
    paddingTop: 5,
    // color: COLORS.title,
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IntroScreen;
