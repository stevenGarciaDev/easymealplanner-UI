import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const RecipePreview = ({ saved = false }) => {
  const [isSaved, setStatus] = useState(saved);

  return (
    <Container>
      <Link href="/" passHref>
        <ImageContainer
            src="https://en.wikipedia.org/wiki/Taco#/media/File:001_Tacos_de_carnitas,_carne_asada_y_al_pastor.jpg"
            alt="testing"
        />
      </Link>
      <TextContainer>
        <TextContent>
          <p>Tacos</p>
          <Icon>
          <FaHeart />
          </Icon>
        </TextContent>
      </TextContainer>
    </Container>
  );
}

export default RecipePreview;

export const Container = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  width: 300px;
  z-index: 2;
`;

const ImageLink = styled(Link)`
  height: 80%;
`;

const ImageContainer = styled.img`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  cursor: pointer;
  height: 100%;
  width: 100%;
`;

const TextContainer = styled.div`
  border-top: 1px solid #ccc;
  height: 20%;
  width: 100%;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 10px;
  font-family: 'Amaranth', sans-serif;
  font-size: 25px;
  position: relative;
  top: -10px;
`;

const Icon = styled.div`
  color: #5f9f3d;
  height: 100%;
  cursor: pointer;
`;