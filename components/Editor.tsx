'use client'

import dynamic from 'next/dynamic'
import { Dispatch, SetStateAction } from 'react'

const MonacoEditorDynamic = dynamic(() => import('@monaco-editor/react'), {
  ssr: false,
})

interface EditorProps {
  value: string
  setValue: Dispatch<SetStateAction<string>>
  readonly?: boolean
  language?: string
}

const Editor = ({ value, setValue, readonly, language }: EditorProps) => {
  return (
    <MonacoEditorDynamic
      // defaultValue="// some comment"
      // onMount={onMountEditor}
      height="75vh"
      language={language ?? 'javascript'}
      options={{
        readOnly: readonly,
      }}
      value={value}
      onChange={(value) => {
        setValue(value ? value : '')
      }}
    />
  )
}

export default Editor
