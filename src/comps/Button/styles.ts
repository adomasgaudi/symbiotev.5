import Button from '@mui/material/Button'
import styled from "styled-components"

interface ttheme {
  theme: {
    text: {
      main: string
    }
  }
}
const tmain = ({ theme: { text } }: ttheme) => text.main
const tfont = ({ theme: { typography } }: any) => typography.fontFamily
const tsize = ({ theme: { typography } }: any) => typography.fontSize


const ButtonX = styled(Button)`
&& {
  color: ${tmain};
  font-family: ${tfont};
  font-size: ${tsize}px;
  &:hover {
    text-decoration: underline;
  }
}
`

export {ButtonX}