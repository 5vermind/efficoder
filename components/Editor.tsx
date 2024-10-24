'use client'

import type { Monaco } from '@monaco-editor/react'
import type { editor } from 'monaco-editor'

import dynamic from 'next/dynamic'
import { Dispatch, SetStateAction, useEffect, useRef } from 'react'

import { changesSchema } from '@/lib/schema'
import { changesToDecorations } from '@/lib/utils'

const MonacoEditorDynamic = dynamic(() => import('@monaco-editor/react'), {
  ssr: false,
})

interface EditorProps {
  value: string
  setValue: Dispatch<SetStateAction<string>>
  readonly?: boolean
  language?: string
  changes?: changesSchema
}

const Editor = ({
  value,
  setValue,
  readonly,
  language,
  changes,
}: EditorProps) => {
  // const [hovered, setHovered] = useState(false)
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null)
  const monacoRef = useRef<Monaco | null>(null)

  const handleEditorDidMount = (
    editor: editor.IStandaloneCodeEditor,
    monaco: Monaco,
  ) => {
    editorRef.current = editor
    monacoRef.current = monaco

    // editor.onMouseMove((event) => {
    //   const position = event.target.position

    //   if (
    //     position &&
    //     position.lineNumber === 2 &&
    //     position.column >= 5 &&
    //     position.column <= 10
    //   ) {
    //     setHovered(true) // 특정 텍스트 범위에서 마우스가 호버된 경우
    //   } else {
    //     setHovered(false)
    //   }
    // })
  }

  useEffect(() => {
    if (!!changes && !!editorRef.current && !!monacoRef.current) {
      const decorations = editorRef.current?.createDecorationsCollection(
        changesToDecorations(monacoRef.current)(changes),
      )

      return () => {
        if (decorations) {
          decorations.clear()
        }
      }
    }
  }, [changes])

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
      onMount={!!changes ? handleEditorDidMount : undefined}
    />
  )
}

export default Editor
