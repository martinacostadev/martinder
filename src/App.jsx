import styled from "@emotion/styled";
import React from "react";
import { Stack } from "./components/stack";
import "./styles.css";

export default function App() {
  const Main = styled.div`
    font-family: sans-serif;
    text-align: center;
    display: flex;
    justify-content: center;
    align-content: center;
    height: 100vh;
    width: 100vw;
  `;

  const Wrapper = styled(Stack)`
    background: #1f2937;
    max-width: 480px;
    flex-direction: column;
  `;

  const Item = styled.div`
    background: #f9fafb;
    width: 250px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 80px;
    text-shadow: 0 10px 10px #d1d5db;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    transform: ${() => {
      let rotation = Math.random() * (8 - -5) + -5;
      return `rotate(${rotation}deg)`;
    }};
  `;

  const Image = styled.img`
    background: #f9fafb;
    width: 100%;
    height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    transform: ${() => {
      let rotation = Math.random() * (8 - -5) + -5;
      return `rotate(${rotation}deg)`;
    }};
  `;

  const Title = styled.div`
    text-decoration: none;
    cursor: pointer;
    position: absolute;
    top: 8rem;
    border-radius: 1.5rem;
    padding: 0.75rem;
    background: #000;
    color: #fff;
  `;

  const Description = styled.div`
    text-decoration: none;
    cursor: pointer;
    position: absolute;
    top: 2rem;
    color: #fff;
    max-width: 18rem;
  `;

  const Note = styled.div`
    position: absolute;
    bottom: 8rem;
    color: #fff;
    font-style: italic;
  `;

  return (
    <Main>
      <Wrapper onVote={(item, vote) => console.log(item.props, vote)}>
        <Item data-value="@soymartinacosta" whileTap={{ scale: 1.5 }}>
          <Image src="/me/3.jpg" />
        </Item>
        <Item data-value="@soymartinacosta" whileTap={{ scale: 1.5 }}>
          <Image src="/me/2.jpg" />
        </Item>
        <Item data-value="@soymartinacosta" whileTap={{ scale: 1.5 }}>
          <Image src="/me/1.jpg" />
        </Item>
      </Wrapper>
      <Title
        as="a"
        target="_blank"
        href="https://www.instagram.com/soymartinacosta/"
      >
        @soymartinacosta
      </Title>

      <Description>
        Bienvenido/a a <strong>MarTínder</strong> 🔥 <br />
        <br /> Soy el único usuario de esta aplicación, así que no queda otra 🤷‍♂️
      </Description>

      <Note>👉 El deslizar por ahora solo funciona en mobile.</Note>
    </Main>
  );
}
