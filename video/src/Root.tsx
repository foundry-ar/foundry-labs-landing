import React from 'react';
import { Composition } from 'remotion';
import { FoundryVideo } from './FoundryVideo';
import { FoundryVideoEs } from './FoundryVideoEs';
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
      <Composition
        id="FoundryVideoEs"
        component={FoundryVideoEs}
        durationInFrames={DURATION_FRAMES}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
    </>
  );
};
