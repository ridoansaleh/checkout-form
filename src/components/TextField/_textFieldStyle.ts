import styled from "styled-components";

interface ContainerProps {
  readonly error: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
  background-color: #fff;
  border: ${({ error }) => (error ? `1px solid #FF0000` : `0`)};
  border-radius: 5px;
  box-shadow: 1px 4px 5px #c7c8c8;
`;

export const Label = styled.span`
  font-weight: 500;
`;

export const Input = styled.input`
  border: 0;
  height: 30px;
  font-size: 21px;

  &:focus {
    outline: none;
  }
`;

export const IconV = styled.img`
  position: absolute;
  right: 20px;
  height: 53px;
`;

export const IconQ = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  color: #909090;
  font-size: 12px;
  border: 1px solid #909090;
  border-radius: 50%;
`;

export const ErrorMessage = styled.div`
  color: #ff0000;
  margin-top: 5px;
  margin-bottom: -10px;
`;
