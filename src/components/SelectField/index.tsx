import * as React from "react";
import { Container, Label, Select, Option } from "./_selectFieldStyle";

interface SelectChangeFunc {
  (e: React.ChangeEvent<HTMLSelectElement>): void;
}

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  value?: string;
  options: Array<string>;
  handleInputChange: SelectChangeFunc;
}

function SelectField(props: Props) {
  return (
    <Container>
      <Label>{props.label}</Label>
      <Select value={props.value} onChange={props.handleInputChange}>
        {props.options.map((option) => (
          <Option key={option}>{option}</Option>
        ))}
      </Select>
    </Container>
  );
}

export default SelectField;
