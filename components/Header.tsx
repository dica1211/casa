/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { useLiveAPIContext } from '@/contexts/LiveAPIContext';
import { Agent, createNewAgent } from '@/lib/presets/agents';
import { useAgent, useUI, useUser } from '@/lib/state';
import c from 'classnames';
import { useEffect, useState } from 'react';

export default function Header() {
  const { showUserConfig, setShowUserConfig, setShowAgentEdit, showNotesPanel, setShowNotesPanel } = useUI();
  const { name } = useUser();
  const { current, setCurrent, availablePresets, availablePersonal, addAgent } =
    useAgent();
  const { disconnect } = useLiveAPIContext();

  let [showRoomList, setShowRoomList] = useState(false);

  useEffect(() => {
    addEventListener('click', () => setShowRoomList(false));
    return () => removeEventListener('click', () => setShowRoomList(false));
  }, []);

  function changeAgent(agent: Agent | string) {
    disconnect();
    setCurrent(agent);
  }

  function addNewChatterBot() {
    disconnect();
    addAgent(createNewAgent());
    setShowAgentEdit(true);
  }

  return (
    <header>
      <div className="roomInfo">
        <div className="roomName">
          <button
            onClick={e => {
              e.stopPropagation();
              setShowRoomList(!showRoomList);
            }}
          >
            <h1 className={c({ active: showRoomList })}>
              {current.name}
              <span className="icon">arrow_drop_down</span>
            </h1>
          </button>

          <button
            onClick={() => setShowAgentEdit(true)}
            className="button createButton"
          >
            <span className="icon">edit</span> Editar
          </button>
        </div>

        <div className={c('roomList', { active: showRoomList })}>
          <div>
            <h3>Predefinidos</h3>
            <ul>
              {availablePresets
                .filter(agent => agent.id !== current.id)
                .map(agent => (
                  <li
                    key={agent.name}
                    className={c({ active: agent.id === current.id })}
                  >
                    <button onClick={() => changeAgent(agent)}>
                      {agent.name}
                    </button>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h3>Tus Asistentes</h3>
            {
              <ul>
                {availablePersonal.length ? (
                  availablePersonal.map(({ id, name }) => (
                    <li key={name} className={c({ active: id === current.id })}>
                      <button onClick={() => changeAgent(id)}>{name}</button>
                    </li>
                  ))
                ) : (
                  <p>Ninguno todavía.</p>
                )}
              </ul>
            }
            <button
              className="newRoomButton"
              onClick={() => {
                addNewChatterBot();
              }}
            >
              <span className="icon">add</span>Nuevo Asistente
            </button>
          </div>
        </div>
      </div>
      <div className="header-actions">
        <button
          className="header-button"
          onClick={() => setShowNotesPanel(!showNotesPanel)}
          title="Study Notes"
        >
          <span className="icon">description</span>
        </button>
        <button
          className="userSettingsButton header-button"
          onClick={() => setShowUserConfig(!showUserConfig)}
          title="User Settings"
        >
          <p className='user-name'>{name || 'Tu nombre'}</p>
          <span className="icon">tune</span>
        </button>
      </div>
    </header>
  );
}