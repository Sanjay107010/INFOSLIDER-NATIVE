// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import Slider from './src/Slider';
// import DemoSlider from './src/demoSlider';
// import Appp from './src/NewSlider';

// type Props = {};

// const App = (props: Props) => {
//   return (
//     <View>
//       {/* <Appp></Appp> */}

//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});

import React from 'react';
// import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet, View, Text, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //   [...]
});

// slides = [...]
const slides = [
  {
    key: 1,
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    // image: require('./assets/1.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Other cool stuff',
    // image: require('./assets/2.jpg'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    // image: require('./assets/3.jpg'),
    backgroundColor: '#22bcb5',
  },
];

export default class App extends React.Component {
  _renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        {/* <Image source={item.image} /> */}
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        {/* <Ion
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
        /> */}
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        {/* <Ion
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
        /> */}
      </View>
    );
  };
  render() {
    return (
      <AppIntroSlider
        data={slides}
        renderDoneButton={this._renderDoneButton}
        renderNextButton={this._renderNextButton}
      />
    );
  }
}
