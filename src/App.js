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

    <button className="btn btn-success btn-large" onClick={()=>console.log(convertToHTML(editorState.getCurrentContent()))}>Show Content</button>
    </div>
  );
}

export default App;
