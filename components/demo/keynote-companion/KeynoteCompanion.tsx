/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { useEffect, useRef } from 'react';
import { Modality, LiveConnectConfig } from '@google/genai';

import BasicFace from '../basic-face/BasicFace';
import { useLiveAPIContext } from '../../../contexts/LiveAPIContext';
import { createSystemInstructions } from '@/lib/prompts';
import { useAgent, useUser } from '@/lib/state';
import Transcript from '@/components/Transcript';
import { useTranscript } from '@/lib/transcript-state';
import { GroundingChunk } from '@/lib/genai-live-client';

export default function KeynoteCompanion() {
  const { client, connected, setConfig, disconnect } = useLiveAPIContext();
  const faceCanvasRef = useRef<HTMLCanvasElement>(null);
  const user = useUser();
  const { current } = useAgent();
  const { addMessage, appendLastMessage, addSourcesToLastMessage, clearTranscript } = useTranscript();

  // Set the configuration for the Live API
  useEffect(() => {
    const config: LiveConnectConfig = {
      systemInstruction: {
        parts: [
          {
            text: createSystemInstructions(current, user),
          },
        ],
      },
    };

    if (current.enableGoogleSearch) {
      config.tools = [{ googleSearch: {} }];
      config.responseModalities = [Modality.TEXT, Modality.AUDIO];
    } else {
      config.responseModalities = [Modality.AUDIO];
      // Fix: `speakingRate` and `pitch` are properties of `speechConfig`, not `voiceConfig`.
      config.speechConfig = {
        voiceConfig: {
          prebuiltVoiceConfig: {
            voiceName: current.voice,
          },
        },
        speakingRate: current.speakingRate,
        pitch: current.pitch,
      };
    }
    setConfig(config);
  }, [setConfig, user, current]);

  // Initiate the session when the Live API connection is established
  // Instruct the model to send an initial greeting message
  useEffect(() => {
    if (!connected) {
      clearTranscript();
      return;
    }

    addMessage({ author: 'agent', text: '' }); // Start a new empty message for the greeting

    client.send(
      {
        text: 'Saluda al usuario en español, preséntate y explica tu rol como asistente veterinario.',
      },
      true
    );

    const onText = (text: string) => appendLastMessage(text);
    const onGrounding = (chunks: GroundingChunk[]) => addSourcesToLastMessage(chunks);
    const onTurnComplete = () => addMessage({ author: 'agent', text: '' });

    client.on('text', onText);
    client.on('groundingMetadata', onGrounding);
    client.on('turncomplete', onTurnComplete);

    return () => {
      client.off('text', onText);
      client.off('groundingMetadata', onGrounding);
      client.off('turncomplete', onTurnComplete);
    };
  }, [client, connected, addMessage, appendLastMessage, addSourcesToLastMessage, clearTranscript]);


  return (
    <div className="keynote-companion">
      <div className="face-container">
        <BasicFace canvasRef={faceCanvasRef!} color={current.bodyColor} />
      </div>
      <div className="transcript-container">
        <Transcript />
      </div>
    </div>
  );
}