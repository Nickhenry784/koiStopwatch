import React from 'react';
import Matter from 'matter-js';
import PropTypes from 'prop-types';
import { View, Dimensions } from 'react-native';

function Floor({ body, color, pos }) {
  const widthBody = body.bounds.max.x - body.bounds.min.x;
  const heightBody = body.bounds.max.y - body.bounds.min.y;

  const xBody = body.position.x - widthBody / 2;
  const yBody = body.position.y - heightBody / 2;

  return (
    <View
      style={{
        borderWidth: 1,
        backgroundColor: color,
        borderStyle: 'solid',
        position: 'absolute',
        left: xBody,
        top: yBody,
        width: widthBody,
        height: heightBody,
      }}
    />
  );
}

Floor.propTypes = {
  color: PropTypes.string,
  pos: PropTypes.object,
  body: PropTypes.object,
};

function ObjectFloor(world, color, pos, size) {
  const initialFloor = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { label: 'Floor', isStatic: true },
  );
  Matter.World.add(world, initialFloor);

  return {
    body: initialFloor,
    color,
    pos,
    renderer: <Floor />,
  };
}
export default ObjectFloor;
