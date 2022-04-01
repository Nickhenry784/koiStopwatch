import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Text,
  Animated,
} from 'react-native';
import { images } from 'assets/images';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SizedBox } from 'sizedbox';
import { randomIntFromInterval } from 'utils/number';
import { makeSelectTurn } from './selectors';
import { appStyle, meatItemStyle } from './style';
import { elementData } from './data/element';

function PlayPage({ dispatch, turn, itemAni, handleClickBackButton }) {
  const [minutes, setMinutes] = useState(randomIntFromInterval(0, 20));
  const [seconds, setSeconds] = useState(60);
  const [play, setPlay] = useState(true);
  const [done, setDone] = useState(false);
  const [position, setPosition] = useState({ top: 370, left: 170 });
  const [randomPosition, setRandomPosition] = useState([
    { top: 320, left: 220, rotate: 180 },
    { top: 340, left: 150, rotate: 180 },
    { top: 320, left: 120, rotate: 0 },
    { top: 280, left: 240, rotate: 0 },
    { top: 340, left: 200, rotate: 0 },
    { top: 350, left: 180, rotate: 0 },
    { top: 360, left: 150, rotate: 0 },
    { top: 300, left: 200, rotate: 180 },
  ]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (play && seconds > 0) {
        const list = [...randomPosition];
        // eslint-disable-next-line no-plusplus
        for (let index = 0; index < list.length; index++) {
          const element = list[index];
          element.top = randomIntFromInterval(300, 350);
          element.left = randomIntFromInterval(150, 200);
        }
        setRandomPosition(list);
        setSeconds(seconds - 1);
      }
      if (play && seconds === 0 && minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(60);
      }
      if (play && seconds === 0 && minutes === 0) {
        setDone(true);
      }
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [play, minutes, seconds]);

  const onClickStopButton = () => {
    setPlay(!play);
  };

  const onClickBackButton = () => {
    handleClickBackButton();
  };

  return (
    <ImageBackground source={images.home.background1} style={appStyle.homeView}>
      {done && (
        <TouchableOpacity
          onPress={onClickBackButton}
          onLongPress={onClickBackButton}>
          <Text style={appStyle.backText}>Back</Text>
        </TouchableOpacity>
      )}
      <SizedBox vertical={30} />
      <View style={appStyle.centerView}>
        {done ? (
          <Image source={images.home.done} style={appStyle.clockImage} />
        ) : (
          <Text style={appStyle.timeText}>{`${minutes} : ${seconds}`}</Text>
        )}
      </View>
      <View style={appStyle.centerView}>
        <Image source={images.home.cook} style={appStyle.cookImage} />
        {!done && (
          <TouchableOpacity
            onPress={onClickStopButton}
            onLongPress={onClickStopButton}>
            <Image source={images.home.stop} style={appStyle.stopImage} />
          </TouchableOpacity>
        )}
      </View>
      <Animated.View
        style={[
          {
            width: 100,
            height: 80,
            resizeMode: 'contain',
            position: 'absolute',
            top: position.top,
            left: position.left,
          },
        ]}>
        <Image source={itemAni.image} style={appStyle.itemImage} />
      </Animated.View>
      {elementData.map((item, index) => (
        <Animated.View
          style={[
            {
              width: 50,
              height: 50,
              resizeMode: 'contain',
              marginTop: 20,
              position: 'absolute',
              top: randomPosition[index].top,
              left: randomPosition[index].left,
              transform: [{ rotate: `${randomPosition[index].rotate} deg` }],
            },
          ]}
          key={item.id}>
          <Image source={item.image} style={appStyle.itemImage} />
        </Animated.View>
      ))}
    </ImageBackground>
  );
}

PlayPage.propTypes = {
  dispatch: PropTypes.func,
  turn: PropTypes.number,
  itemAni: PropTypes.object,
  handleClickBackButton: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  turn: makeSelectTurn(),
});

export default connect(mapStateToProps)(PlayPage);
