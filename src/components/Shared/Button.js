import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.2rem solid var(--lightBlue);
  color: var(--lightBlue);
  border-radius: 0.5rem;
  paddiing: 0.2rem 0.5rem;
  margin .2rem .5rem .2rem 0;
  transitiion: all .5s ease-in-out;
  &:hover {
    background: var(--lightBlue);
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;
