import styled from "styled-components";
import Link from "next/link";

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

export const ImageLink = styled(Link)`
  height: 80%;
`;

export const ImageContainer = styled.img`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  cursor: pointer;
  height: 300px;
  object-fit: cover;
  width: 100%;
`;

export const TextContainer = styled.div`
  border-top: 1px solid #ccc;
  height: 100px;
  width: 100%;
`;

export const TextContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  font-family: 'Amaranth', sans-serif;
  font-size: 25px;
  height: 100px;
  justify-content: space-between;
  margin: 0px 10px;
  position: relative;
`;

export const Icon = styled.div`
  color: #5f9f3d;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;