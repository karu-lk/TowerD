import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { ContentState, convertToRaw } from 'draft-js';
import { convertToHTML } from 'draft-convert';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function App() {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  const _contentState = ContentState.createFromText('Sample content state');
  const raw = convertToRaw(_contentState);  // RawDraftContentState JSON
  const [contentState, setContentState] = useState(raw); // ContentState JSON

  return (
    <div className="App">
      <header className="App-header">
        Tower D
      </header>

      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />

      <div className="row mt-4">
        <div className="col-12" style={{paddingLeft:30}}>
          <h2>HTML Output</h2>
        </div>
        <div className='row'>
          <div className='col-12 mt-2' style={{paddingLeft:30}}>
            <span className='text-left'>{convertToHTML(editorState.getCurrentContent())}</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
