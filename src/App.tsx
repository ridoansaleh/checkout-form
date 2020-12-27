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

const isPhoneFormatValid = (val: string) => {
  return (
    val.length === 15 &&
    val[0] === "(" &&
    /^[0-9]*$/.test(val[1]) &&
    /^[0-9]*$/.test(val[2]) &&
    /^[0-9]*$/.test(val[3]) &&
    val[4] === ")" &&
    val[5] === " " &&
    /^[0-9]*$/.test(val[6]) &&
    /^[0-9]*$/.test(val[7]) &&
    /^[0-9]*$/.test(val[8]) &&
    val[9] === "-" &&
    /^[0-9]*$/.test(val[10]) &&
    /^[0-9]*$/.test(val[11]) &&
    val[12] === "-" &&
    /^[0-9]*$/.test(val[13]) &&
    /^[0-9]*$/.test(val[14])
  );
};

const isCreditFormatValid = (val: string) => {
  return /^\(?([0-9]{4})\)?-?([0-9]{4})-?([0-9]{4})-?([0-9]{4})$/.test(val);
};

const isExpirationDateValid = (val: string) => {
  return (
    val.length === 7 &&
    /^[0-9]*$/.test(val[0]) &&
    /^[0-9]*$/.test(val[1]) &&
    val[2] === " " &&
    val[3] === "/" &&
    val[4] === " " &&
    /^[0-9]*$/.test(val[5]) &&
    /^[0-9]*$/.test(val[6])
  );
};

function App() {
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [expirationDate, setExpirationDate] = useState("");

  const handlePostalCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (/^[0-9]*$/.test(val) && val.length <= 4) {
      setPostalCode(val);
    }
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (val.length <= 15) {
      setPhoneNumber(val);
    }
  };

  const handleCreditCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (val.length <= 19) {
      setCreditCard(val);
    }
  };

  const handleSecurityCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (val.length <= 3) {
      setSecurityCode(val);
    }
  };

  const handleExpirationDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (val.length <= 7) {
      setExpirationDate(val);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
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
              error={isFormSubmitted && !firstname}
              message="Please enter First name"
            />
            <TextField
              label="Last name"
              name="lastname"
              placeholder="Musk"
              value={lastname}
              handleInputChange={(e) => setLastname(e.target.value)}
              error={isFormSubmitted && !lastname}
              message="Please enter Last name"
            />
          </FieldName>
          <FieldEmail>
            <TextField
              label="Email"
              name="email"
              placeholder="elon@spacex.com"
              value={email}
              handleInputChange={(e) => setEmail(e.target.value)}
              error={
                isFormSubmitted && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
              }
              message="Please enter a valid Email"
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
              value={postalCode}
              handleInputChange={handlePostalCodeChange}
              error={isFormSubmitted && !postalCode}
              message="Please enter Postal Code"
            />
          </FieldAddress>
          <FieldPhone>
            <TextField
              label="Phone Number"
              name="phone_number"
              placeholder="(212) 692-93-92"
              value={phoneNumber}
              handleInputChange={handlePhoneNumberChange}
              error={isFormSubmitted && !isPhoneFormatValid(phoneNumber)}
              message="Please enter a valid Phone Number"
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
              handleInputChange={handleCreditCardChange}
              icon="visa"
              error={isFormSubmitted && !isCreditFormatValid(creditCard)}
              message="Please enter a valid Credit Card Number"
            />
          </FieldCreditCard>
          <FieldCardDetail>
            <TextField
              label="Security code"
              name="security_code"
              type="password"
              placeholder="***"
              value={securityCode}
              handleInputChange={handleSecurityCodeChange}
              icon="security"
              error={isFormSubmitted && securityCode.length < 3}
              message="Please enter a valid Security code"
            />
            <TextField
              label="Expiration date"
              name="expiration_date"
              placeholder="MM / YY"
              value={expirationDate}
              handleInputChange={handleExpirationDate}
              error={isFormSubmitted && !isExpirationDateValid(expirationDate)}
              message="Please enter a valid Expiration date"
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
