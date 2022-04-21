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
  Dimensions,
} from 'react-native';
import { images } from 'assets/images';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SizedBox } from 'sizedbox';
import { randomIntFromInterval } from 'utils/number';
import { makeSelectTurn } from './selectors';
import { appStyle } from './style';
import { decrementTurn } from './actions';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

function HomePage({ dispatch, turn }) {
  const [play, setPlay] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [stopTime, setStopTime] = useState(true);
  const [rotateKoiCircle, setRotateKoiCircle] = useState(0);
  const [translateYValue, setTranslateYValue] = useState(0);
  const [position, setPosition] = useState({
    top: windowHeight * 0.04,
    hotiziel: windowWidth * 0.03,
    rotate: 10,
  });

  useEffect(() => {
    const secondDown = 1;
    const timeCoutdown = setTimeout(() => {
      if (!stopTime && seconds > 0) {
        setSeconds(seconds - secondDown);
        setRotateKoiCircle(randomIntFromInterval(0, 360));
        setTranslateYValue(randomIntFromInterval(-20, 20));
        setPosition({
          top: randomIntFromInterval(40, 50),
          hotiziel: randomIntFromInterval(5, 15),
          rotate: randomIntFromInterval(10, 20),
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
        setRotateKoiCircle(0);
        setPosition({ top: 45, hotiziel: 8, rotate: 12 });
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
    if (hours !== 0 || minutes !== 0) {
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
                rotate: '180deg',
                // translateY: translateYValue,
              },
              {
                translateY: translateYValue,
              },
            ],
          },
        ]}>
        <Image source={images.home.bottle} style={appStyle.bottleImage} />
      </Animated.View>
      <Animated.View
        style={[
          {
            width: windowWidth * 0.2,
            height: windowWidth * 0.2,
            resizeMode: 'contain',
            position: 'absolute',
            top: `${position.top}%`,
            left: `${position.hotiziel}%`,
            transform: [
              {
                rotate: `${position.rotate}deg`,
              },
            ],
          },
        ]}>
        <Image source={images.home.koi1} style={appStyle.koi1Image} />
      </Animated.View>
      <Animated.View
        style={[
          {
            width: windowWidth * 0.2,
            height: windowWidth * 0.2,
            resizeMode: 'contain',
            position: 'absolute',
            top: `${position.top}%`,
            right: `${position.hotiziel}%`,
            transform: [
              {
                rotate: `${position.rotate}deg`,
              },
            ],
          },
        ]}>
        <Image source={images.home.koi2} style={appStyle.koi2Image} />
      </Animated.View>
      {play ? (
        <ImageBackground source={images.home.popup} style={appStyle.popupImage}>
          <SizedBox vertical={20} />
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
      ) : (
        <Animated.View
          style={[
            {
              width: windowWidth * 0.6,
              height: windowWidth * 0.6,
              resizeMode: 'contain',
              transform: [
                {
                  rotate: `${rotateKoiCircle}deg`,
                },
              ],
            },
          ]}>
          <Image
            source={images.home.koicricle}
            style={appStyle.koicricleImage}
          />
        </Animated.View>
      )}
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
          source={!stopTime ? images.home.stop : images.home.start}
          style={appStyle.playImage}
        />
      </TouchableOpacity>
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
