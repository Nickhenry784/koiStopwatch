import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  TouchableOpacity,
  Alert,
  Animated,
  TextInput,
  Text,
  ImageBackground,
} from 'react-native';
import { images } from 'assets/images';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SizedBox } from 'sizedbox';
import { randomIntFromInterval } from 'utils/number';
import { makeSelectTurn } from './selectors';
import { appStyle } from './style';
import { decrementTurn } from './actions';

function HomePage({ dispatch, turn }) {
  const [play, setPlay] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [stopTime, setStopTime] = useState(true);
  const [rotateEarth, setRotateEarth] = useState(0);
  const [translateYValue, setTranslateYValue] = useState(0);
  const [position, setPosition] = useState({
    top: 10,
    hotiziel: 5,
  });

  useEffect(() => {
    const secondDown = 1;
    const timeCoutdown = setTimeout(() => {
      if (!stopTime && seconds > 0) {
        setSeconds(seconds - secondDown);
        setRotateEarth(randomIntFromInterval(0, 360));
        setTranslateYValue(randomIntFromInterval(-20, 20));
        setPosition({
          top: randomIntFromInterval(8, 12),
          hotiziel: randomIntFromInterval(3, 8),
        });
      }
      if (!stopTime && seconds === 0 && minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(60);
      }
      if (!stopTime && minutes === 0 && hours > 0) {
        setMinutes(60);
        setHours(hours - 1);
      }
      if (!stopTime && seconds === 0 && minutes === 0 && hours === 0) {
        setStopTime(true);
        setRotateEarth(0);
        setPosition({ top: 10, hotiziel: 5 });
      }
    }, 1000);
    return () => {
      clearTimeout(timeCoutdown);
    };
  }, [hours, minutes, seconds, stopTime]);

  const onClickPlayButton = () => {
    if (turn <= 0) {
      Alert.alert('Please buy more turn');
      return false;
    }
    setPlay(true);
  };

  const onClickOKButton = () => {
    setPlay(false);
    setStopTime(false);
    if (hours !== 0 && minutes !== 0) {
      dispatch(decrementTurn());
    }
  };

  const onClickStopButton = () => {
    setStopTime(!stopTime);
  };

  return (
    <View style={appStyle.homeView}>
      <SizedBox vertical={10} />
      <Animated.View
        style={[
          {
            width: 100,
            height: 80,
            resizeMode: 'contain',
            transform: [
              {
                translateY: translateYValue,
              },
            ],
          },
        ]}>
        <Image source={images.home.astronaut} style={appStyle.astronautImage} />
      </Animated.View>
      <Animated.View
        style={[
          {
            width: 100,
            height: 60,
            resizeMode: 'contain',
            position: 'absolute',
            top: `${position.top}%`,
            left: `${position.hotiziel}%`,
          },
        ]}>
        <Image source={images.home.cloud} style={appStyle.cloudImage} />
      </Animated.View>
      <Animated.View
        style={[
          {
            width: 100,
            height: 60,
            resizeMode: 'contain',
            position: 'absolute',
            top: `${position.top}%`,
            right: `${position.hotiziel}%`,
          },
        ]}>
        <Image source={images.home.sun} style={appStyle.sunImage} />
      </Animated.View>
      <Animated.View
        style={[
          {
            width: 300,
            height: 300,
            resizeMode: 'contain',
            transform: [
              {
                rotate: `${rotateEarth}deg`,
              },
            ],
          },
        ]}>
        <Image source={images.home.earth} style={appStyle.earthImage} />
      </Animated.View>
      <SizedBox vertical={5} />
      {seconds !== 0 && (
        <Text style={appStyle.timeLabelText}>
          {`${hours} : ${minutes} : ${seconds}`}
        </Text>
      )}
      <SizedBox vertical={10} />
      <TouchableOpacity
        onPress={seconds !== 0 ? onClickStopButton : onClickPlayButton}
        onLongPress={seconds !== 0 ? onClickStopButton : onClickPlayButton}>
        <Image
          source={!stopTime ? images.home.stop : images.home.play}
          style={appStyle.playImage}
        />
      </TouchableOpacity>
      <Image source={images.home.clouds} style={appStyle.cloudsImage} />
      {play && (
        <ImageBackground source={images.home.popup} style={appStyle.popupImage}>
          <View style={appStyle.timePickerView}>
            <TextInput
              style={appStyle.inputStyle}
              keyboardType="numeric"
              onChangeText={Number(hours) > 24 ? setHours(24) : setHours}
              value={String(hours)}
            />
            <Text style={appStyle.labelPickerText}> :</Text>
            <TextInput
              style={appStyle.inputStyle}
              keyboardType="numeric"
              onChangeText={Number(minutes) > 60 ? setMinutes(60) : setMinutes}
              value={String(minutes)}
            />
          </View>
          <TouchableOpacity
            onPress={onClickOKButton}
            onLongPress={onClickOKButton}>
            <Image source={images.home.ok} style={appStyle.okImage} />
          </TouchableOpacity>
        </ImageBackground>
      )}
    </View>
  );
}

HomePage.propTypes = {
  dispatch: PropTypes.func,
  turn: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  turn: makeSelectTurn(),
});

export default connect(mapStateToProps)(HomePage);
