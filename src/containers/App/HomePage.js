import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity } from 'react-native';
import { images } from 'assets/images';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SizedBox } from 'sizedbox';
import { makeSelectTurn } from './selectors';
import { appStyle, meatItemStyle } from './style';
import { decrementTurn } from './actions';
import { meatData } from './data/meat';
import PlayPage from './PlayPage';

function HomePage({ dispatch, turn }) {
  const [itemAnimation, setItemAnimation] = useState(meatData[0]);
  const [play, setPlay] = useState(false);
  const onClickMeatItem = item => {
    setItemAnimation(item);
  };

  const onClickStartButton = () => {
    setPlay(true);
  };

  const onChangePlayState = () => {
    setPlay(false);
  };

  return play ? (
    <PlayPage
      itemAni={itemAnimation}
      handleClickBackButton={onChangePlayState}
    />
  ) : (
    <View style={appStyle.homeView}>
      <SizedBox vertical={10} />
      <View style={appStyle.centerView}>
        <Image source={images.home.clock} style={appStyle.clockImage} />
      </View>
      <SizedBox vertical={10} />
      <View style={appStyle.itemView}>
        {meatData.map(item => (
          <TouchableOpacity
            onPress={() => onClickMeatItem(item)}
            onLongPress={() => onClickMeatItem(item)}
            key={item.id}>
            <Image
              source={item.image}
              style={meatItemStyle(item.top, item.left)}
            />
          </TouchableOpacity>
        ))}
      </View>
      <View style={appStyle.centerView}>
        <TouchableOpacity
          onPress={onClickStartButton}
          onLongPress={onClickStartButton}>
          <Image source={images.home.start} style={appStyle.stopImage} />
        </TouchableOpacity>
      </View>
      {/* <Animated.View
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
      </Animated.View> */}
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
