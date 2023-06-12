import React from 'react';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "white",
  },
  slider: {

    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 250,
    width: '100%',
    marginHorizontal: 15,
    marginTop: 145,
  },
  introText: {

    color: "darkblue",
    fontSize: 28,
    textAlign: 'center',
    marginTop: 41,
    marginHorizontal: 35,
    // backgroundColor: "yellow",
  },
  dotContainer: {
    flexDirection: 'row',
  },
  dotStyle: {
    backgroundColor: "grey",
    width: 10,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDotStyle: {
    backgroundColor: "darkblue",
    width: 30,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },

  paginationView: {
    position: 'absolute',
    bottom: 65,
    left: 25,
    right: 16,
  },
  doneBtn: {
    position: 'absolute',
    backgroundColor: "darkblue",
    height: 35,
    width: 100,
    borderRadius: 33,
    justifyContent: 'center',
    bottom: 50,
    right: 25,
  },
  doneText: {
    alignSelf: 'center',
    fontSize: 15,
    color: "white",
  },
  buttonCircle: {
    position: 'absolute',
    width: 40,
    height: 40,
    backgroundColor: "red",
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 50,
    right: 25,
  },
  nextArrow: { height: 18, width: 25 },
});

export default styles;
