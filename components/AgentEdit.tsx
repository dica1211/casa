/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { useRef } from 'react';
import {
  Agent,
  AGENT_COLORS,
  INTERLOCUTOR_VOICE,
  INTERLOCUTOR_VOICES,
} from '@/lib/presets/agents';
import Modal from './Modal';
import c from 'classnames';
import { useAgent, useUI } from '@/lib/state';
import AgentPrompts from './AgentPrompts';

export default function EditAgent() {
  const agent = useAgent(state => state.current);
  const updateAgent = useAgent(state => state.update);
  const nameInput = useRef(null);
  const { setShowAgentEdit } = useUI();

  function onClose() {
    setShowAgentEdit(false);
  }

  function updateCurrentAgent(adjustments: Partial<Agent>) {
    updateAgent(agent.id, adjustments);
  }

  return (
    <Modal onClose={() => onClose()}>
      <div className="editAgent">
        <div>
          <form>
            <div>
              <input
                className="largeInput"
                type="text"
                placeholder="Nombre del Asistente"
                value={agent.name}
                onChange={e => updateCurrentAgent({ name: e.target.value })}
                ref={nameInput}
              />
            </div>

            <div>
              <label>
                Personalidad
                <textarea
                  value={agent.personality}
                  onChange={e =>
                    updateCurrentAgent({ personality: e.target.value })
                  }
                  rows={4}
                  placeholder="¿Cómo debe actuar el asistente? ¿Cuál es su especialidad? Describe su tono y estilo de comunicación."
                />
              </label>
            </div>
             <div className="search-toggle-container">
                <label className="checkbox">
                  Habilitar Búsqueda en Internet
                  <input
                    type="checkbox"
                    checked={agent.enableGoogleSearch ?? false}
                    onChange={e =>
                      updateCurrentAgent({ enableGoogleSearch: e.target.checked })
                    }
                  />
                </label>
                <p className="description">
                  Permite al asistente acceder a información actualizada de la Búsqueda de Google.
                </p>
            </div>
            <div>
              <label>
                Base de Conocimiento
                <textarea
                  value={agent.knowledgeBase}
                  onChange={e =>
                    updateCurrentAgent({ knowledgeBase: e.target.value })
                  }
                  rows={7}
                  placeholder="Pega aquí el texto de referencia (artículos, apuntes, etc.) que el asistente debe usar como fuente principal de información."
                />
              </label>
            </div>
          </form>
          <AgentPrompts />
        </div>

        <div>
          <div>
            <ul className="colorPicker">
              {AGENT_COLORS.map((color, i) => (
                <li
                  key={i}
                  className={c({ active: color === agent.bodyColor })}
                >
                  <button
                    style={{ backgroundColor: color }}
                    onClick={() => updateCurrentAgent({ bodyColor: color })}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="voicePicker">
            Voz
            <select
              value={agent.voice}
              onChange={e => {
                updateCurrentAgent({
                  voice: e.target.value as INTERLOCUTOR_VOICE,
                });
              }}
            >
              {INTERLOCUTOR_VOICES.map(voice => (
                <option key={voice} value={voice}>
                  {voice}
                </option>
              ))}
            </select>
          </div>

          <div className="speakingStyle">
            <div className="slider-control">
              <label htmlFor="speakingRate">Velocidad</label>
              <input
                type="range"
                id="speakingRate"
                min="0.25"
                max="4.0"
                step="0.01"
                value={agent.speakingRate ?? 1}
                onChange={e =>
                  updateCurrentAgent({
                    speakingRate: parseFloat(e.target.value),
                  })
                }
              />
              <span>{agent.speakingRate?.toFixed(2) ?? '1.00'}</span>
            </div>
            <div className="slider-control">
              <label htmlFor="pitch">Tono</label>
              <input
                type="range"
                id="pitch"
                min="-20.0"
                max="20.0"
                step="0.1"
                value={agent.pitch ?? 0}
                onChange={e =>
                  updateCurrentAgent({ pitch: parseFloat(e.target.value) })
                }
              />
              <span>{agent.pitch?.toFixed(1) ?? '0.0'}</span>
            </div>
          </div>
        </div>
        <button onClick={() => onClose()} className="button primary">
          ¡Listo!
        </button>
      </div>
    </Modal>
  );
}