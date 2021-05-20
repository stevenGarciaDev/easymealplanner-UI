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
  align-items: center;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 300px;
  min-width: 300px;
  width: 100%;
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
  align-items: center;
  display: flex;
  flex-direction: row;
  font-family: 'Amaranth', sans-serif;
  font-size: 25px;
  justify-content: space-between;
  margin: 0px 10px;
  position: relative;
  top: -10px;
`;

const Icon = styled.div`
  color: #5f9f3d;
  cursor: pointer;
  height: 100%;
`;