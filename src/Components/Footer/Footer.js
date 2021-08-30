import React from 'react';
import {FooterDiv, NameDiv, Logo, LogoDiv, FooterContent, LogoPokebola} from './Styled'


const Footer = () => {
  return (
<FooterDiv>
    <FooterContent>
        <LogoDiv>
            <Logo src={"https://bit.ly/3wD8P6d"} />
            <p><b>Projeto desenvolvido por:</b></p><p> José Henrique Holanda Cavalcanti <br/> Ana Beatriz de Morais Dias <br/> Evai da Dilva Santos
 </p>
        </LogoDiv>
        <NameDiv>
        <a href={"https://www.labenu.com.br"} target={'_blank'} rel="noopener noreferrer"> <LogoPokebola src={"https://bit.ly/3sW85Jn"} /> </a>
        {/*imagem não está aparecendo. consertar depois*/}
            <h2>Pokedex</h2>
        </NameDiv>
    </FooterContent>
</FooterDiv>

  )
}
export default Footer;