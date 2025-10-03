/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { useAgent } from '@/lib/state';
import { Agent, Prompt } from '@/lib/presets/agents';
import { useState } from 'react';

type PromptFormProps = {
  prompt?: Prompt | null;
  onSave: (prompt: Prompt) => void;
  onCancel: () => void;
};

// A small form component for editing/creating a prompt
const PromptForm = ({ prompt, onSave, onCancel }: PromptFormProps) => {
  const [title, setTitle] = useState(prompt?.title || '');
  const [text, setText] = useState(prompt?.text || '');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !text.trim()) return;

    onSave({
      id: prompt?.id || Math.random().toString(36).substring(2, 15),
      title,
      text,
    });
  };

  return (
    <form onSubmit={handleSave} className="promptForm">
      <input
        type="text"
        placeholder="Prompt Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        aria-label="Prompt Title"
      />
      <textarea
        placeholder="Prompt Text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        required
        aria-label="Prompt Text"
      />
      <div className="promptFormActions">
        <button type="submit" className="button">Save</button>
        <button type="button" onClick={onCancel} className="button secondary">Cancel</button>
      </div>
    </form>
  );
};

export default function AgentPrompts() {
  const agent = useAgent(state => state.current);
  const updateAgent = useAgent(state => state.update);
  const [editingPromptId, setEditingPromptId] = useState<string | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  function updateCurrentAgent(adjustments: Partial<Agent>) {
    updateAgent(agent.id, adjustments);
  }

  const handleSavePrompt = (promptToSave: Prompt) => {
    let newPrompts;
    if (isAddingNew) {
      newPrompts = [...(agent.prompts || []), promptToSave];
    } else {
      newPrompts = (agent.prompts || []).map(p => p.id === promptToSave.id ? promptToSave : p);
    }
    updateCurrentAgent({ prompts: newPrompts });
    setEditingPromptId(null);
    setIsAddingNew(false);
  };

  const handleDeletePrompt = (promptId: string) => {
    const newPrompts = (agent.prompts || []).filter(p => p.id !== promptId);
    updateCurrentAgent({ prompts: newPrompts });
  };

  const handleCancel = () => {
    setEditingPromptId(null);
    setIsAddingNew(false);
  };

  return (
    <div className="agentPrompts">
      <h4>Conversational Prompts</h4>
      <p className="description">Define specific scenarios or questions to test your agent's personality.</p>
      <ul>
        {(agent.prompts || []).map(prompt => (
          <li key={prompt.id} className="promptItem">
            {editingPromptId === prompt.id ? (
              <PromptForm prompt={prompt} onSave={handleSavePrompt} onCancel={handleCancel} />
            ) : (
              <div className="promptDisplay">
                <h5>{prompt.title}</h5>
                <p>{prompt.text}</p>
                <div className="promptActions">
                  <button className="button-link" onClick={() => setEditingPromptId(prompt.id)}>Edit</button>
                  <button className="button-link" onClick={() => handleDeletePrompt(prompt.id)}>Delete</button>
                </div>
              </div>
            )}
          </li>
        ))}
        {isAddingNew && (
          <li className="promptItem">
              <PromptForm onSave={handleSavePrompt} onCancel={handleCancel} />
          </li>
        )}
      </ul>
      {!isAddingNew && (
        <button onClick={() => setIsAddingNew(true)} className="button">
          <span className="icon">add</span> Add New Prompt
        </button>
      )}
    </div>
  );
}
