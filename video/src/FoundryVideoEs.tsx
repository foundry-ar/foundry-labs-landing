import React from 'react';
import { AbsoluteFill, Sequence } from 'remotion';
import { COLORS, FPS, FONT } from './theme';
import { Scene1ProblemEs } from './scenes/Scene1ProblemEs';
import { Scene2ConversationEs } from './scenes/Scene2ConversationEs';
import { Scene3AugmentEs } from './scenes/Scene3AugmentEs';
import { Scene4CloseEs } from './scenes/Scene4CloseEs';

export const FoundryVideoEs: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.bg,
        fontFamily: FONT.sans,
      }}
    >
      <Sequence from={0} durationInFrames={6 * FPS} name="El Problema">
        <Scene1ProblemEs />
      </Sequence>

      <Sequence from={6 * FPS} durationInFrames={20 * FPS} name="Conversación">
        <Scene2ConversationEs />
      </Sequence>

      <Sequence from={26 * FPS} durationInFrames={8 * FPS} name="Potenciá, no reemplaces">
        <Scene3AugmentEs />
      </Sequence>

      <Sequence from={34 * FPS} durationInFrames={10 * FPS} name="Cierre Foundry">
        <Scene4CloseEs />
      </Sequence>
    </AbsoluteFill>
  );
};
