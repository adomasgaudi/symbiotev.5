import styled from 'styled-components/macro'

const MyLi = styled.li` 
display: flex;
justify-content: space-between;
cursor: pointer;
`

const TextSpan = styled.span`
display: block;
background: yellow;
&:hover{
  padding-right: 100px;
  transition: .1s;
}
`

const Xtag = styled.span`
padding: 0 5px;
color: red;
&:hover{
  background: red;
  color: black;
  padding: 0 10px;
  transition: .1s;
}
`




export {Xtag, TextSpan, MyLi}