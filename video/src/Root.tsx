import React from 'react';
import { Composition } from 'remotion';
import { FoundryVideo } from './FoundryVideo';
import { FPS, DURATION_FRAMES, WIDTH, HEIGHT } from './theme';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="FoundryVideo"
        component={FoundryVideo}
        durationInFrames={DURATION_FRAMES}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
    </>
  );
};
