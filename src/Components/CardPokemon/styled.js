import styled from "styled-components";

export const CardContainer = styled.div`
  border: 2px solid black;
  width: 200px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`

export const TextContainer = styled.div`
  font-size: 15px;
  font-family: sans-serif;
  color: #8B0000;
  padding: 0.7em 2em;
  margin-right: 50px;
  background-color: #F1362F;
  block-size: fit-content
`
export const NameText = styled.div`
  font-size: 15px;
  font-family: sans-serif;
  color: #8B0000;
  padding: 0.7em 2em;
  margin-right: 50px;
  background-color: #F1362F;
  block-size: fit-content

`

export const ButtonDiv = styled.button`
  font-size: 15px;
  font-family: sans-serif;
  color: #8B0000;
  padding: 0.7em 2em;
  margin-right: 50px;
  background-color: #F1362F;
  block-size: fit-content
`


export {CardContainer, TextContainer, ButtonDiv}