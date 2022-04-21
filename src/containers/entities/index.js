import ObjectBird from 'containers/components/Bird';
import ObjectFloor from 'containers/components/Floor';
import Matter from 'matter-js';
import { Dimensions } from 'react-native';
import React from 'react';
import ObjectObstacle from 'containers/components/Obstacle';
import { getPipeSizePosPair } from 'utils/random';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default restart => {
  const engine = Matter.Engine.create({ enableSleeping: false });

  const { world } = engine;

  world.gravity.y = 0.5;

  const pipeSizePosA = getPipeSizePosPair();
  const pipeSizePosB = getPipeSizePosPair(windowWidth * 0.9);
  return {
    physics: { engine, world },

    Bird: ObjectBird(
      world,
      'green',
      { x: 50, y: 300 },
      { height: 40, width: 40 },
    ),

    ObstacleTop1: ObjectObstacle(
      world,
      'ObstacleTop1',
      'red',
      pipeSizePosA.pipeTop.pos,
      pipeSizePosA.pipeTop.size,
    ),
    ObstacleBottom1: ObjectObstacle(
      world,
      'ObstacleBottom1',
      'blue',
      pipeSizePosA.pipeBottom.pos,
      pipeSizePosA.pipeBottom.size,
    ),

    ObstacleTop2: ObjectObstacle(
      world,
      'ObstacleTop2',
      'red',
      pipeSizePosB.pipeTop.pos,
      pipeSizePosB.pipeTop.size,
    ),
    ObstacleBottom2: ObjectObstacle(
      world,
      'ObstacleBottom2',
      'blue',
      pipeSizePosB.pipeBottom.pos,
      pipeSizePosB.pipeBottom.size,
    ),

    Floor: ObjectFloor(
      world,
      'green',
      { x: windowWidth / 2, y: windowHeight },
      { height: 200, width: windowWidth },
    ),
  };
};
