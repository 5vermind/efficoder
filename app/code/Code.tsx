'use client'

import { Button } from '@nextui-org/button'
import { useEffect, useState } from 'react'
import { experimental_useObject } from 'ai/react'
import zod from 'zod'

import LanguageDropdown from './LanguageDropdown'
import ModeDropdown from './ModeDropdown'

import Editor from '@/components/Editor'

export default function Code() {
  const [originalCode, setOriginalCode] = useState('//이곳에 코드를 입력하세요')
  const [modifiedCode, setModifiedCode] = useState('')
  const [language, setLanguage] = useState(new Set(['javascript']))
  const { submit, isLoading } = experimental_useObject({
    api: '/api/ai',
    schema: zod.object({
      code: zod.string(),
      evaluation: zod.object({
        old: zod.string(),
        new: zod.string(),
      }),
    }),
    onFinish: (object) => {
      setModifiedCode(object.object?.code ?? '')
    },
  })
  const [mode, setMode] = useState(new Set(['performance']))

  useEffect(() => {
    if (originalCode === '//이곳에 코드를 입력하세요') return
    setModifiedCode(originalCode)
  }, [originalCode])

  return (
    <div className="flex flex-row items-center justify-center gap-4">
      <div className="w-full flex flex-col gap-4">
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
      <div className="w-full flex flex-col gap-4">
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
          language={Array.from(language).join(', ').replaceAll('_', ' ')}
          setValue={setModifiedCode}
          value={modifiedCode}
        />
      </div>
    </div>
  )
}
