import Button from '@mui/material/Button'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Typography from '@mui/material/Typography'
import styled from 'styled-components/macro'

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

const DivRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`

const Typo = styled(Typography)`
  &&{
    ${({ theme: { text } }) => text?.col};
  }
`

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
const ChevronRightIconX = styled(ChevronRightIcon)`
  && {
    color: ${({ theme: { text } }) => text?.main};
  }
`

export { Typo, DivRow, ChevronRightIconX, ButtonX }
