import Container from "@mui/material/Container"
import styled from "styled-components"

const StyledDiv = styled.div`
/* padding: auto; */
@media(min-width: 0px){
  min-width: 500px
}
@media(min-width: 960px){
  min-width: 750px
}
min-width: 500px
`




const MyContainer = styled(Container)`
@media (min-width: 960px) {
  /* background: red!important; */
  max-width: 750px !important;
}
.MuiPaper-root {
}
`

export {StyledDiv, MyContainer}
