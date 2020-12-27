import * as React from "react";
import { Container, Label, Input, IconV, IconQ } from "./_textFieldStyle";
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
}

function TextField({ type = "text", ...props }: Props) {
  let selectedIcon = "";

  if (props.icon === "visa") {
    selectedIcon = visaIcon;
  }

  return (
    <Container>
      <Label>{props.label}</Label>
      <Input
        name={props.name}
        type={type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.handleInputChange}
      />
      {props.icon === "visa" && <IconV src={selectedIcon} />}
      {props.icon === "security" && <IconQ>?</IconQ>}
    </Container>
  );
}

export default TextField;
