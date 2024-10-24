import type { editor } from 'monaco-editor'

import { Monaco } from '@monaco-editor/react'

import { changesSchema } from './schema'

export const changesToDecorations =
  (monaco: Monaco) =>
  (changes: changesSchema): editor.IModelDeltaDecoration[] => {
    return changes.map((change) => {
      return {
        range: new monaco.Range(
          Number(change.line.split('-')[0]),
          1,
          Number(change.line.split('-')[1]),
          1,
        ),
        options: {
          isWholeLine: true,
          inlineClassName: 'editorHilight',
          hoverMessage: {
            value: change.explanation,
          },
        },
      }
    })
  }
