import React from 'react';
import { AbsoluteFill, Sequence } from 'remotion';
import { COLORS, FPS, FONT } from './theme';
import { Scene1Problem } from './scenes/Scene1Problem';
import { Scene2Conversation } from './scenes/Scene2Conversation';
import { Scene3Augment } from './scenes/Scene3Augment';
import { Scene4Close } from './scenes/Scene4Close';

export const FoundryVideo: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.bg,
        fontFamily: FONT.sans,
      }}
    >
      <Sequence from={0} durationInFrames={5 * FPS} name="The Problem">
        <Scene1Problem />
      </Sequence>

      <Sequence from={5 * FPS} durationInFrames={15 * FPS} name="Conversation">
        <Scene2Conversation />
      </Sequence>

      <Sequence from={20 * FPS} durationInFrames={7 * FPS} name="Augment, not Replace">
        <Scene3Augment />
      </Sequence>

      <Sequence from={27 * FPS} durationInFrames={10 * FPS} name="Foundry Close">
        <Scene4Close />
      </Sequence>
    </AbsoluteFill>
  );
};
