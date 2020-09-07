import {
  Dialog,
  DialogActions,
  DialogButton,
  DialogContent,
  DialogTitle,
} from '@rmwc/dialog'
import { ReactNode } from 'react'

interface MovieDialogProps {
  open: boolean
  title: string
  children: ReactNode
  onSetDialogOpen: Function
  url: string
}

export const MovieDialog = ({
  open,
  title,
  children,
  onSetDialogOpen,
  url,
}: MovieDialogProps) => (
  <Dialog open={open} onClosed={(evt) => onSetDialogOpen(false)}>
    <DialogTitle>{ title }</DialogTitle>
    <DialogContent>
      <iframe
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
