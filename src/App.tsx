import React, { useState } from "react";
import TextField from "./components/TextField";
import SelectField from "./components/SelectField";
import {
  Container,
  Header,
  BlackBox,
  PageTitle,
  Content,
  PartTitle,
  Number,
  Icon,
  FieldName,
  FieldEmail,
  FieldAddress,
  FieldPhone,
  FieldCreditCard,
  FieldCardDetail,
  Button,
  ShoppingCart,
} from "./_appStyle";
import lockIcon from "./assets/lock.svg";
import cartIcon from "./assets/shopping-cart-24.png";

const COUNTRY_LIST = [
  "United States",
  "Canada",
  "Mexico",
  "Panama",
  "Nicaragua",
  "El Salvador",
  "Cuba",
];

function App() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [expirationDate, setExpirationDate] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Header>
        <BlackBox />
      </Header>
      <Content>
        <PageTitle>You've come a long way, Baby!</PageTitle>
        <form onSubmit={handleSubmit}>
          <PartTitle>
            <Number>1</Number>
            <h2>Personal Information</h2>
          </PartTitle>
          <FieldName>
            <TextField
              label="First name"
              name="firstname"
              placeholder="Elon"
              value={firstname}
              handleInputChange={(e) => setFirstname(e.target.value)}
            />
            <TextField
              label="Last name"
              name="lastname"
              placeholder="Musk"
              value={lastname}
              handleInputChange={(e) => setLastname(e.target.value)}
            />
          </FieldName>
          <FieldEmail>
            <TextField
              label="Email"
              name="email"
              placeholder="elon@spacex.com"
              value={email}
              handleInputChange={(e) => setEmail(e.target.value)}
            />
          </FieldEmail>
          <FieldAddress>
            <SelectField
              label="Country"
              name="country"
              value={country}
              options={COUNTRY_LIST}
              handleInputChange={(e) => setCountry(e.target.value)}
            />
            <TextField
              label="Postal Code"
              name="postal_code"
              placeholder="10001"
              value={email}
              handleInputChange={(e) => setEmail(e.target.value)}
            />
          </FieldAddress>
          <FieldPhone>
            <TextField
              label="Phone Number"
              name="phone_number"
              placeholder="(212) 692-93-92"
              value={phoneNumber}
              handleInputChange={(e) => setPhoneNumber(e.target.value)}
            />
          </FieldPhone>
          <PartTitle>
            <Number>2</Number>
            <h2>Payment Details</h2>
            <Icon src={lockIcon} />
          </PartTitle>
          <FieldCreditCard>
            <TextField
              label="Credit Card Number"
              name="credit_card_number"
              placeholder="0000-0000-0000-0000"
              value={creditCard}
              handleInputChange={(e) => setCreditCard(e.target.value)}
              icon="visa"
            />
          </FieldCreditCard>
          <FieldCardDetail>
            <TextField
              label="Security code"
              name="security_code"
              type="password"
              placeholder="***"
              value={securityCode}
              handleInputChange={(e) => setSecurityCode(e.target.value)}
              icon="security"
            />
            <TextField
              label="Expiration date"
              name="expiration_date"
              placeholder="MM / YY"
              value={expirationDate}
              handleInputChange={(e) => setExpirationDate(e.target.value)}
            />
          </FieldCardDetail>
          <Button>
            <ShoppingCart src={cartIcon} />
            Complete Purchase
          </Button>
        </form>
      </Content>
    </Container>
  );
}

export default App;
