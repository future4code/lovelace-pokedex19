import styled from 'styled-components'

const FooterDiv = styled.footer`
    max-width: 100%;
    margin-top: 20px;
    padding: 10px ;
    background-color: #0000FF;
    block-size: fit-content;
`

const FooterContent = styled.div`
    max-width: 100%;
    width: auto;
    padding:  0.7em 2em;
    display: flex;
    margin-right: 80px;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: 420px){
        flex-direction: column;
    }
`

const LogoDiv = styled.div`
    max-width: 100%;
    width: 280px ;
    text-align: center;
    @media (max-width: 420px){
        margin-bottom: 20px;
    }
`

const Logo = styled.img`
    max-width: 100%;
    width: 200px;
    block-size: inherit;
`

const NameDiv = styled.div`
    @media (max-width: 200px){
        margin-bottom: 10px;
    }
`

const LogoPokebola = styled.img`
    max-width: 100%;
    width: 100px;
`

export {FooterDiv, LogoDiv, Logo, NameDiv, FooterContent, LogoPokebola}