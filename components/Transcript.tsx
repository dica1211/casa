/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { useNotes } from '@/lib/notes-state';
import { useTranscript } from '@/lib/transcript-state';
import { useEffect, useRef } from 'react';

export default function Transcript() {
  const messages = useTranscript(state => state.messages);
  const appendToNotes = useNotes(state => state.appendToNotes);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the bottom of the transcript when new messages are added
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="transcript" ref={scrollRef}>
      <ul>
        {messages.map((message) => (
          <li key={message.id} className="message-item agent-message">
            <div className="message-bubble">
              <p>{message.text}</p>
              {message.sources && message.sources.length > 0 && (
                <div className="sources">
                  <h4>Sources</h4>
                  <ul>
                    {message.sources.map((source, index) => (
                      <li key={index}>
                        <a href={source.web.uri} target="_blank" rel="noopener noreferrer">
                          {source.web.title || source.web.uri}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
               <button
                  className="add-to-notes-button"
                  title="Add to Notes"
                  onClick={() => appendToNotes(message.text)}
                >
                  <span className="icon">note_add</span>
                </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
