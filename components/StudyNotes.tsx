/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { useNotes } from "@/lib/notes-state";
import { useUI } from "@/lib/state";
import c from "classnames";

export default function StudyNotes() {
  const { notes, setNotes } = useNotes();
  const { showNotesPanel, setShowNotesPanel } = useUI();

  const handleDownload = () => {
    const blob = new Blob([notes], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'apuntes-de-estudio.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <div
        className={c('panel-shroud', { active: showNotesPanel })}
        onClick={() => setShowNotesPanel(false)}
      />
      <div className={c('panel study-notes-panel', { active: showNotesPanel })}>
        <div className="panel-header">
          <div className="panel-header-title">
            <h3>Apuntes de Estudio</h3>
            <button onClick={handleDownload} className="download-notes-button" title="Descargar Apuntes">
              <span className="icon">download</span>
            </button>
          </div>
          <button onClick={() => setShowNotesPanel(false)} className="close-panel-button">
            <span className="icon">close</span>
          </button>
        </div>
        <div className="panel-content">
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Escribe aquí tus apuntes... Se guardan automáticamente."
            aria-label="Apuntes de Estudio"
          />
        </div>
      </div>
    </>
  );
}