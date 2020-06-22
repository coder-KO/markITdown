import React, { useState } from 'react';
import './App.css';
import styled from "styled-components";

import Navbar from './Components/Navbar'
import Input from './Components/Input';
import Output from './Components/Output';
import EditorContext from './EditorContext'

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  
`;

const EditorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

function App() {

  const [markdownText, setMarkdownText] = useState("");

  const contextValue = {
    markdownText,
    setMarkdownText
  };

  return (
    <EditorContext.Provider value={contextValue}>
      <AppContainer>
        <Navbar />
        <EditorContainer>
          <Input />
          <Output />
        </EditorContainer>
      </AppContainer>
    </EditorContext.Provider>
  );
}

export default App;
