import * as React from "react";
import {
  Container,
  Wrapper,
  Label,
  Input,
  IconV,
  IconQ,
  ErrorMessage,
} from "./_textFieldStyle";
import visaIcon from "./assets/visa.svg";

interface InputChangeFunc {
  (e: React.ChangeEvent<HTMLInputElement>): void;
}

interface Props {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value?: string;
  handleInputChange: InputChangeFunc;
  icon?: string;
  error: boolean;
  message: string;
}

function TextField({ type = "text", ...props }: Props) {
  return (
    <Container>
      <Wrapper error={props.error}>
        <Label>{props.label}</Label>
        <Input
          name={props.name}
          type={type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.handleInputChange}
        />
        {props.icon === "visa" && <IconV src={visaIcon} />}
        {props.icon === "security" && <IconQ>?</IconQ>}
      </Wrapper>
      {props.error && <ErrorMessage>{props.message}</ErrorMessage>}
    </Container>
  );
}

export default TextField;
