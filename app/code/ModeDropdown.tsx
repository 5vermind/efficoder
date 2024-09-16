import { Button } from '@nextui-org/button'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/dropdown'

import { MODES } from '@/constant/MODES'

interface ModeDropdownProps {
  mode: Set<string>
  setMode: (mode: Set<string>) => void
}

export default function ModeDropdown({ mode, setMode }: ModeDropdownProps) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button color="primary" variant="bordered">
          {mode}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        selectedKeys={mode}
        selectionMode="single"
        onSelectionChange={(keys) =>
          setMode(new Set(keys as unknown as string[]))
        }
      >
        {MODES.map((mode) => (
          <DropdownItem key={mode}>{mode}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}
