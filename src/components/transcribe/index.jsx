import {
  CheckBox,
  Container,
  File,
  Frame,
  Icon,
  Input,
  Label,
  Select,
  Option,
  Text,
  Title,
} from './styles/transcribe'

function Transcribe({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Transcribe.Frame = function TranscribeFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>
}

Transcribe.Title = function TranscribeTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Transcribe.Icon = function TranscribeIcon({ children, ...restProps }) {
  return (
    <Icon type="button" {...restProps}>
      {children}
    </Icon>
  )
}

Transcribe.Label = function TranscribeLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>
}

Transcribe.Select = function TranscribeSelect({ children, ...restProps }) {
  return <Select {...restProps}>{children}</Select>
}

Transcribe.Option = function TranscribeOption({ children, ...restProps }) {
  return <Option {...restProps}>{children}</Option>
}

Transcribe.File = function TranscribeFile({ ...restProps }) {
  return <File type="file" accept="audio/*,video/*" {...restProps} />
}

Transcribe.Input = function TranscribeInput({ ...restProps }) {
  return (
    <Input
      type="url"
      placeholder="Paste a Drobpox, Google Drive or Youtube URL here"
      {...restProps}
    />
  )
}

Transcribe.CheckBox = function TranscribeCheckBox({ ...restProps }) {
  return <CheckBox type="checkbox" {...restProps} />
}

Transcribe.Text = function TranscribeText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}
export default Transcribe
