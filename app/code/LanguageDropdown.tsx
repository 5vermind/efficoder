'use client'

import { Button } from '@nextui-org/button'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/dropdown'
import { useMemo } from 'react'

import { LANGUAGES } from '@/constant/LANGUAGES'

interface LanguageDropdownProps {
  language: Set<string>
  setLanguage: (language: Set<string>) => void
}

export default function LanguageDropdown({
  language,
  setLanguage,
}: LanguageDropdownProps) {
  const languageValue = useMemo(
    () => Array.from(language).join(', ').replaceAll('_', ' '),
    [language],
  )

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button color="primary" variant="bordered">
          {languageValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        className="h-96 overflow-y-auto"
        selectedKeys={language}
        selectionMode="single"
        onSelectionChange={(keys) =>
          setLanguage(new Set(keys as unknown as string[]))
        }
      >
        {LANGUAGES.map((lang) => (
          <DropdownItem key={lang.value}>{lang.name}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}
