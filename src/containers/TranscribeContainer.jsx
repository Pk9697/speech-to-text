import { useContext } from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import Transcribe from '../components/transcribe'
import Button from '../components/button'
import { ModalContext } from '../context/modalContext'
import { TranscribeContext } from '../context/transcribeContext'

function TranscribeContainer() {
  const { setIsOpenModal } = useContext(ModalContext)

  const {
    transcribeState: { inProgress },
    changeFile,
    transcribe,
  } = useContext(TranscribeContext)

  return (
    <Transcribe>
      <Transcribe.Frame>
        <Transcribe.Title>Transcribe File</Transcribe.Title>
        <Transcribe.Icon onClick={() => setIsOpenModal(false)}>
          <CloseOutlinedIcon />
        </Transcribe.Icon>
      </Transcribe.Frame>
      <Transcribe.Frame $flexCol $gap="32px">
        <Transcribe.Frame $flexCol $gap="8px">
          <Transcribe.Label>Transcription Language</Transcribe.Label>
          <Transcribe.Select>
            <Transcribe.Option>English</Transcribe.Option>
          </Transcribe.Select>
        </Transcribe.Frame>
        <Transcribe.Frame>
          <Transcribe.File onChange={changeFile} />
        </Transcribe.Frame>
        <Transcribe.Frame $flexCol $gap="8px">
          <Transcribe.Label>Import from Link</Transcribe.Label>
          <Transcribe.Input />
        </Transcribe.Frame>
        <Transcribe.Frame $gap="8px">
          <Transcribe.CheckBox />
          <Transcribe.Text>Speaker identification</Transcribe.Text>
        </Transcribe.Frame>
      </Transcribe.Frame>
      <Transcribe.Frame>
        <Button disabled={inProgress} onClick={transcribe}>
          Transcribe File
        </Button>
      </Transcribe.Frame>
    </Transcribe>
  )
}

export default TranscribeContainer
