import React, { useState } from 'react';
import './App.css';
import styled from "styled-components";

import Input from './Components/Input';
import Output from './Components/Output';
import EditorContext from './EditorContext'

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  font-family: "Lato", sans-serif;
  padding: 2%;
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
        <Title>Markdown Editor</Title>
        <EditorContainer>
          <Input />
          <Output />
        </EditorContainer>
      </AppContainer>
    </EditorContext.Provider>
  );
}

export default App;
