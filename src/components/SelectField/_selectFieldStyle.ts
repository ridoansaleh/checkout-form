import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 1px 4px 5px #c7c8c8;
`;

export const Label = styled.span`
  font-weight: 500;
`;

export const Select = styled.select`
  border: 0;
  height: 30px;
  font-size: 21px;

  &:focus {
    outline: none;
  }
`;

export const Option = styled.option``;
