import {
  Dialog,
  DialogActions,
  DialogButton,
  DialogContent,
} from '@rmwc/dialog'
import { ReactNode, useRef } from 'react'
import { useRouter } from 'next/router'

interface MovieDialogProps {
  open: boolean
  url: string
  children: ReactNode
}

interface IframeRef {
  current: HTMLIFrameElement
}

export const MovieDialog = ({ open, url }: MovieDialogProps) => {
  const router = useRouter()
  const iframeRef: IframeRef = useRef(null)

  const onCloseDialog = (iframeRef: IframeRef) => {
    // Needed to stop video playing when modal dialog is closed
    iframeRef.current.src = iframeRef.current.src
    router.back()
  }

  return (
    <Dialog open={open} onClosed={() => onCloseDialog(iframeRef)}>
      <DialogContent>
        <iframe
          ref={iframeRef}
          src={url}
          width="100%"
          height="100%"
          className="iframeDialog"></iframe>
      </DialogContent>
      <DialogActions>
        <DialogButton action="close">Close</DialogButton>
      </DialogActions>
    </Dialog>
  )
}
