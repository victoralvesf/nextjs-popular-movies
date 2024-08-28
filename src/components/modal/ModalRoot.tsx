import clsx from "clsx"
import { XIcon } from "lucide-react"

interface ModalRootProps {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

export function ModalRoot({ children, isOpen, onClose }: ModalRootProps) {
  return (
    <div className={clsx(
      'fixed flex justify-center items-center inset-0 transition-all duration-300 backdrop-blur p-8',
      isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
    )}>
      <div className="bg-black/90 absolute inset-0 z-10" onClick={onClose} />

      <div className="max-w-[800px] bg-background p-8 md:px-16 md:py-14 z-20 rounded-md relative border border-border">
        <button className="absolute top-2 right-2 md:top-4 md:right-4 hover:bg-border p-1 rounded-full" onClick={onClose}>
          <XIcon className="w-5 h-5" />
        </button>

        {children}
      </div>
    </div>
  )
}