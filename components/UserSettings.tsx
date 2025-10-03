/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import Modal from './Modal';
import { useUI, useUser } from '@/lib/state';

export default function UserSettings() {
  const { name, info, setName, setInfo } = useUser();
  const { setShowUserConfig } = useUI();

  function updateClient() {
    setShowUserConfig(false);
  }

  return (
    <Modal onClose={() => setShowUserConfig(false)}>
      <div className="userSettings">
        <p>
          Esta es una herramienta interactiva que te permite conversar con asistentes de IA especializados en medicina veterinaria.
        </p>

        <form
          onSubmit={e => {
            e.preventDefault();
            setShowUserConfig(false);
            updateClient();
          }}
        >
          <p>Añadir esta información opcional hace la experiencia más personalizada:</p>

          <div>
            <p>Tu nombre</p>
            <input
              type="text"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="¿Cómo te gusta que te llamen?"
            />
          </div>

          <div>
            <p>Tu información</p>
            <textarea
              rows={3}
              name="info"
              value={info}
              onChange={e => setInfo(e.target.value)}
              placeholder="Cosas que deberíamos saber sobre ti... Tu nivel de estudios, áreas de interés en veterinaria, etc."
            />
          </div>

          <button className="button primary">¡Vamos!</button>
        </form>
      </div>
    </Modal>
  );
}