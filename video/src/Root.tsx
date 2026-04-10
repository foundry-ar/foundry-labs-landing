import React from 'react';
import { Composition } from 'remotion';
import { FoundryVideo } from './FoundryVideo';
import { FoundryVideoEs } from './FoundryVideoEs';
import { WhatsAppAgentVideo } from './services/WhatsAppAgentVideo';
import { SystemsEngineeringVideo } from './services/SystemsEngineeringVideo';
import { EnterpriseAIVideo } from './services/EnterpriseAIVideo';
import { FPS, DURATION_FRAMES, WIDTH, HEIGHT } from './theme';

const SERVICE_FPS = 30;
const SERVICE_W = 1920;
const SERVICE_H = 1080;

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
      <Composition
        id="WhatsAppAgent"
        component={WhatsAppAgentVideo}
        durationInFrames={10 * SERVICE_FPS}
        fps={SERVICE_FPS}
        width={SERVICE_W}
        height={SERVICE_H}
      />
      <Composition
        id="SystemsEngineering"
        component={SystemsEngineeringVideo}
        durationInFrames={9 * SERVICE_FPS}
        fps={SERVICE_FPS}
        width={SERVICE_W}
        height={SERVICE_H}
      />
      <Composition
        id="EnterpriseAI"
        component={EnterpriseAIVideo}
        durationInFrames={9 * SERVICE_FPS}
        fps={SERVICE_FPS}
        width={SERVICE_W}
        height={SERVICE_H}
      />
    </>
  );
};
