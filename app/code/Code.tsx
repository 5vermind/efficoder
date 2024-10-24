'use client'

import { Button } from '@nextui-org/button'
import { useState } from 'react'
import { experimental_useObject } from 'ai/react'
import { Modal } from '@nextui-org/modal'
import { CircularProgress } from '@nextui-org/progress'

import LanguageDropdown from './LanguageDropdown'
import ModeDropdown from './ModeDropdown'

import Editor from '@/components/Editor'
import { aiSchema, changesSchema } from '@/lib/schema'

export default function Code() {
  const [originalCode, setOriginalCode] = useState('//이곳에 코드를 입력하세요')
  const [modifiedCode, setModifiedCode] = useState('')
  const [language, setLanguage] = useState(new Set(['javascript']))
  const [changes, setChanges] = useState<changesSchema>([])
  const { submit, isLoading } = experimental_useObject({
    api: '/api/ai',
    schema: aiSchema,
    onFinish: (object) => {
      setModifiedCode(object.object?.code ?? '')
      setChanges(object.object?.changes ?? [])
    },
  })
  const [mode, setMode] = useState(new Set(['performance']))

  return (
    <div className="flex flex-row items-center justify-center gap-4">
      <div className="flex flex-col w-full gap-4">
        <div className="flex gap-2">
          <LanguageDropdown language={language} setLanguage={setLanguage} />
          <ModeDropdown mode={mode} setMode={setMode} />
        </div>
        <Editor
          language={Array.from(language).join(', ').replaceAll('_', ' ')}
          setValue={setOriginalCode}
          value={originalCode}
        />
      </div>
      <div className="flex flex-col w-full gap-4">
        <Button
          className="w-6"
          color="secondary"
          variant="shadow"
          onClick={() => {
            if (originalCode === '') return
            submit({
              code: originalCode,
              mode: Array.from(mode)[0],
            })
          }}
        >
          Efficode!
        </Button>
        <Editor
          readonly
          changes={changes}
          language={Array.from(language).join(', ').replaceAll('_', ' ')}
          setValue={setModifiedCode}
          value={modifiedCode}
        />
      </div>
      <Modal isOpen={isLoading}>
        <CircularProgress aria-label="Loading..." />
      </Modal>
    </div>
  )
}
