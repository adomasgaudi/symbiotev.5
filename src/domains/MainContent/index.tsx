import { Container } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { useAppSelector } from 'store'
import { useTheme } from '@mui/system'

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

const Text = () => {
  return (
    <>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore assumenda,
      perferendis aspernatur animi optio magnam repellendus fugiat vero debitis
      numquam explicabo, voluptatem cumque placeat blanditiis? Facilis
      repudiandae ad nisi corporis numquam fuga vitae unde deserunt enim quis
      sed rerum pariatur voluptate assumenda fugit nam mollitia consectetur,
      quibusdam nobis minus. Laboriosam voluptatibus harum inventore nisi fuga!
      Recusandae possimus nisi ullam pariatur, similique, laborum ipsa sunt
      labore ab vero expedita beatae asperiores minus culpa architecto eum
      debitis veritatis corrupti praesentium commodi. Nesciunt enim fugiat
      temporibus vero, sequi, porro expedita placeat distinctio laborum
      molestiae a autem tenetur suscipit nobis quis. Debitis similique animi
      ullam molestias laboriosam sit commodi at recusandae, atque, iure, harum
      nostrum optio. Sunt hic deserunt architecto porro! Voluptas temporibus
      totam molestias. Molestiae voluptatem sint consectetur deleniti optio
      explicabo aut laborum repellendus vitae quod culpa sunt sapiente dicta ab
      quaerat quidem necessitatibus harum, quis unde ut libero similique
      cupiditate dignissimos dolorum. Expedita maiores earum ullam, obcaecati
      veniam perferendis blanditiis. Numquam eos doloremque sunt non eveniet
      distinctio, voluptate maiores fugit, praesentium consectetur rerum quaerat
      ab. Sunt, accusantium. Nemo quo optio consectetur eveniet distinctio eaque
      voluptates aspernatur molestias numquam sit! Animi aspernatur sapiente
      corporis omnis quibusdam blanditiis quisquam quos itaque nobis porro nulla
      voluptas, nisi, incidunt cum rem error, qui aliquam similique veniam?
      Maiores, ex voluptatem. Neque ex nesciunt reiciendis vel blanditiis nam
      eaque est culpa ut. Dicta aspernatur, cum, quae libero, suscipit dolorum
      saepe commodi recusandae molestiae modi blanditiis perspiciatis cumque
      expedita labore repellat! Dolorem doloribus minima ex obcaecati esse vel
      exercitationem facilis consectetur eaque aperiam, excepturi iste harum
      dolore saepe et distinctio nemo ea? Laborum nostrum molestias et iusto
      debitis earum, nesciunt, nulla est dignissimos eaque aspernatur eius quos
      facilis! Quibusdam ipsa exercitationem aliquid fuga temporibus ad?
      Consectetur, error neque. Veniam, dolorum animi. Molestias autem neque
      error, suscipit voluptatum quas quae dolor blanditiis eveniet minima hic
      quidem placeat maiores consequuntur vitae at ex sed voluptates tempora
      reiciendis in. Unde incidunt asperiores accusamus iusto est! Eveniet
      tempora asperiores vero aliquid iure. Blanditiis, libero deleniti
      accusamus commodi nobis ipsum pariatur temporibus quasi voluptate porro ex
      maiores explicabo animi odit quis tenetur impedit. Earum sit nobis
      voluptatem! Iure, rerum rem quis adipisci debitis dignissimos quam aperiam
      cumque voluptates error numquam voluptatum neque veniam doloribus illo
      sequi quaerat labore blanditiis consectetur nisi vitae distinctio eaque!
      Porro nam quas temporibus odio molestias. Veniam ducimus alias aut omnis!
      Sapiente, dolorem? Iste a deserunt fugiat vitae dolores fuga ullam sequi
      ipsam delectus commodi eius debitis aut aspernatur ut saepe voluptatem
      quas, minima ipsum ratione atque corporis. Voluptate, corrupti? Nesciunt,
      dolore dolorum! Cupiditate tempora dolor dignissimos sint, repudiandae
      labore obcaecati nostrum delectus nisi eos? Repellendus id hic a impedit
      inventore, dolorem, expedita dolor est quasi ea cupiditate natus dicta
      aliquam in beatae mollitia dolore veniam officia architecto laborum aut
      rem saepe? Quod dicta id necessitatibus ex atque porro voluptate deleniti
      repellendus. Commodi cum iure, ullam eum fuga error saepe eius ipsam
      minima, cupiditate ab repellat iusto iste eos architecto autem quibusdam
      possimus a quia culpa! Beatae cum, perspiciatis tenetur ipsum adipisci
      saepe! Nesciunt corporis dolorem aliquam, dolores eveniet cum placeat
      libero numquam voluptatibus dolor iusto accusantium molestias odio
      aliquid! Ullam, repellendus quibusdam quasi doloribus deserunt enim animi
      eligendi atque nam earum hic, debitis repellat ex provident consequuntur
      dignissimos accusantium soluta. Adipisci asperiores, eligendi rem odio
      libero facere, cum nobis molestiae maiores deserunt veniam, eos labore
      expedita. Magnam eaque cupiditate distinctio soluta quis, maxime excepturi
      delectus mollitia accusantium? Molestias suscipit voluptatum consectetur
      ipsum cum optio omnis doloremque fuga veritatis, cupiditate laborum, modi
      magni non, odio voluptatibus ullam aut quas totam odit facilis. Iste
      deleniti fugiat ut exercitationem sit fuga error nulla. Laborum explicabo
      necessitatibus soluta laboriosam saepe? Ducimus nemo voluptates nam
      dolorem eum repellat, veniam soluta minima corporis aspernatur odit
      tenetur quibusdam magni labore repellendus consequatur perferendis aliquid
      incidunt, praesentium voluptatibus maxime blanditiis nostrum excepturi
      sequi. Distinctio voluptas harum tempora eveniet, quam necessitatibus
      obcaecati officiis deserunt iure autem, minima aut ad doloremque minus
      architecto? Ipsam nobis esse in harum cupiditate beatae, numquam ad eius
      perspiciatis dolores non quisquam rem tenetur eligendi tempore accusantium
      nulla dolorum nostrum. Laudantium rem id quisquam, totam pariatur animi
      praesentium. Provident eligendi ad modi, qui omnis, porro cumque nobis
      soluta voluptatum, aspernatur nemo accusamus. Quia odio modi laborum quae
      voluptates dolore ullam ut tempore molestiae nulla, iste quas perferendis
      est amet aut ea cum quo pariatur, hic doloribus rem cupiditate aliquam, ab
      nesciunt! Rerum, ipsum praesentium voluptas nam nihil aliquid id vero
      atque omnis enim qui quasi reprehenderit. Veritatis doloremque libero
      consectetur harum architecto, sit accusamus accusantium assumenda pariatur
      ut, dolor ipsa velit deleniti eius nostrum voluptatibus nihil. Excepturi,
      doloribus sequi! Exercitationem itaque, asperiores explicabo commodi
      similique ab, aliquid unde deserunt ad facilis facere ea vitae, ullam
      voluptatum eligendi eaque architecto nam? Perspiciatis recusandae expedita
      atque quas aperiam impedit aliquid nobis soluta quidem cumque praesentium
      nemo natus animi voluptatum doloribus optio alias quos, quasi culpa ullam
      ipsam eaque voluptatem nostrum! Fuga rem optio veniam, quis, fugit qui
      asperiores fugiat eos voluptatem modi porro tenetur aut tempore. Soluta,
      dolores quibusdam vero similique autem atque, molestias dolor hic
      voluptates quaerat magnam beatae nostrum architecto tenetur quos provident
      quo vitae dignissimos fuga? Doloribus incidunt, quod provident laboriosam
      aliquid deserunt quas illo iure tenetur velit, sunt eius, magnam ipsam
      beatae? Porro ipsum culpa odio nemo assumenda minima, illo sit incidunt
      autem. Quo vitae incidunt rerum consequatur porro nobis nostrum ut,
      expedita id adipisci autem hic nesciunt quas voluptate molestias itaque
      esse commodi nulla, obcaecati laudantium soluta dolorum sequi amet! Minima
      sunt rerum, dolorum vitae quaerat molestias, consectetur distinctio dicta
      ea incidunt beatae facere ipsam, accusamus laborum itaque culpa libero
      explicabo in nisi blanditiis voluptate quos rem ratione velit. Quo
      eveniet, cumque iure aut numquam placeat vel saepe ut reiciendis
      voluptates porro ex necessitatibus tenetur impedit totam nobis, aperiam
      sapiente excepturi enim dolorum. Hic fuga odio nesciunt iusto nobis
      tenetur commodi asperiores libero aliquid placeat blanditiis, cum delectus
      rem. Maiores, officiis cupiditate dolorum, perferendis expedita
      reprehenderit soluta et accusantium aut earum porro sequi temporibus
      molestias obcaecati debitis dignissimos ab consectetur possimus!
    </>
  )
}

/* const symbList = ['one', 'two', 'three'] */
const Symb: React.FC = ({ children }) => {
  return (<li>{children}</li>)
}

const Symbs = () => {
  const pageDoc = useAppSelector(state=>state.fire.pageDoc)
  if(pageDoc)
    return (
      <ul>
        {pageDoc.syms.map((sym: any) => ( 
          <Symb key={sym.symId}>{sym.body}</Symb>
        ))}
      </ul>
    )
  else 
    return(
      <li>none to show</li>
    )
}
const DocTitle = () => {
  const pageDoc = useAppSelector(state=>state.fire.pageDoc)
  if(pageDoc)
    return <h1>{pageDoc.title}</h1>
  else
    return <h1>loading...</h1>
}

const MainContent = () => {
  const theme = useTheme()
  console.log({ theme })

  return (
    <StyledDiv>
      <MyContainer>
        <DocTitle />
        <Symbs />
      </MyContainer>
    </StyledDiv>
  )
}

export default MainContent
