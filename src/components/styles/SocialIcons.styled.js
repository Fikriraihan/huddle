import React from "react";
import styled from "styled-components";

export const StyledSocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  li {
    list-style: none;
  }

  a {
    border: 1px solid #fff;
    border-radius: 50%;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    margin-right: 10px;
    text-decoration: none;
  }
`;