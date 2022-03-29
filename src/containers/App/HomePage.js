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
import { makeSelectTurn } from './selectors';
import { appStyle } from './style';
import { decrementTurn } from './actions';

function HomePage({ dispatch, turn }) {
  const listPostion = [
    {
      top: 10,
      left: 20,
    },
    {
      top: 10,
      left: 60,
    },
    {
      top: 30,
      left: 20,
    },
    {
      top: 30,
      left: 60,
    },
  ];
  const [play, setPlay] = useState(false);
  const [hours, setHours] = useState(0);
  const [inputStatus, setInputStatus] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [stopTime, setStopTime] = useState(true);
  const [position, setPosition] = useState([...listPostion]);
  const [opacityValue, setOpacityValue] = useState(0);

  useEffect(() => {
    const timeCoutdown = setTimeout(() => {
      const list = [...position];
      const element = list[0];
      if (!stopTime && seconds > 0) {
        setSeconds(seconds - 1);
        list.splice(0, 1);
        list.splice(3, 0, element);
        setPosition(list);
      }
      if (!stopTime && seconds === 0 && minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(60);
      }
      if (!stopTime && minutes === 0 && hours > 0) {
        setMinutes(60);
        setHours(hours - 1);
      }
      if (!stopTime && minutes === 0 && hours === 0 && seconds === 1) {
        setStopTime(true);
        setOpacityValue(1);
      }
    }, 1000);
    const opacitySum = 0.1;
    return () => {
      clearTimeout([timeCoutdown]);
    };
  }, [hours, minutes, seconds, stopTime, opacityValue]);

  const onClickPlayButton = () => {
    if (turn <= 0) {
      Alert.alert('Please buy more turn');
      return false;
    }
    setInputStatus(true);
    setPlay(true);
  };

  const onClickOKButton = () => {
    setPlay(false);
    setStopTime(false);
    if (hours !== 0 || minutes !== 0) {
      dispatch(decrementTurn());
    }
    setInputStatus(false);
  };

  const onClickStopButton = () => {
    setStopTime(!stopTime);
  };

  const onClickBannerImage = () => {
    setStopTime(true);
    setOpacityValue(0);
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
            position: 'absolute',
            top: `${position[0].top} %`,
            left: `${position[0].left} %`,
          },
        ]}>
        <Image source={images.home.image1} style={appStyle.itemImage} />
      </Animated.View>
      <Animated.View
        style={[
          {
            width: 100,
            height: 80,
            resizeMode: 'contain',
            position: 'absolute',
            top: `${position[1].top} %`,
            left: `${position[1].left} %`,
          },
        ]}>
        <Image source={images.home.image2} style={appStyle.itemImage} />
      </Animated.View>
      <Animated.View
        style={[
          {
            width: 100,
            height: 80,
            resizeMode: 'contain',
            position: 'absolute',
            top: `${position[2].top} %`,
            left: `${position[2].left} %`,
          },
        ]}>
        <Image source={images.home.image3} style={appStyle.itemImage} />
      </Animated.View>
      <Animated.View
        style={[
          {
            width: 100,
            height: 80,
            resizeMode: 'contain',
            position: 'absolute',
            top: `${position[3].top} %`,
            left: `${position[3].left} %`,
          },
        ]}>
        <Image source={images.home.image4} style={appStyle.itemImage} />
      </Animated.View>
      {play && (
        <View style={appStyle.inputView}>
          <ImageBackground
            source={images.home.inputtext}
            style={appStyle.inputImage}>
            <TextInput
              style={appStyle.inputStyle}
              keyboardType="numeric"
              onChangeText={Number(hours) > 24 ? setHours(24) : setHours}
              value={String(hours)}
            />
          </ImageBackground>
          <Text style={appStyle.labelPickerText}>:</Text>
          <ImageBackground
            source={images.home.inputtext}
            style={appStyle.inputImage}>
            <TextInput
              style={appStyle.inputStyle}
              keyboardType="numeric"
              onChangeText={Number(minutes) > 60 ? setMinutes(60) : setMinutes}
              value={String(minutes)}
            />
          </ImageBackground>
        </View>
      )}
      {opacityValue !== 0 && (
        <Animated.View
          style={[
            {
              width: 400,
              height: 300,
              position: 'absolute',
              top: '0%',
              left: '0%',
              opacity: opacityValue,
            },
          ]}>
          <TouchableOpacity
            onPress={onClickBannerImage}
            onLongPress={onClickBannerImage}>
            <Image style={appStyle.bannerImage} source={images.home.done} />
          </TouchableOpacity>
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
        onPress={
          inputStatus
            ? onClickOKButton
            : seconds !== 0
            ? onClickStopButton
            : onClickPlayButton
        }
        onLongPress={
          inputStatus
            ? onClickOKButton
            : seconds !== 0
            ? onClickStopButton
            : onClickPlayButton
        }>
        <Image
          source={
            inputStatus
              ? images.home.ok
              : !stopTime
              ? images.home.stop
              : images.home.start
          }
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
