import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;

  img {
    @media (max-width: 768px) {
      .mobile {
        text-align: center;
        max-width: 100%;
      }
    }
  }
`;
