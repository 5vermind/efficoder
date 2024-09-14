'use client'

import dynamic from 'next/dynamic'

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false })

const EditorComponent = () => {
  return (
    <MonacoEditor
      defaultLanguage="javascript"
      defaultValue="// some comment"
      height="90vh"
    />
  );
};

export default EditorComponent