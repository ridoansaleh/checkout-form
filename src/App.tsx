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
import {
  isEmailValid,
  isPostalCodeValid,
  isPhoneNumberValid,
  isCreditCardValid,
  isSecurityCodeValid,
  isExpirationDateValid,
} from "./validation";
import isPhoneNumberFormatValid from "./format/phone_number";
import isCreditCardFormatValid from "./format/credit_card";
import isExpiredDateFormatValid from "./format/expired_date";

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
    let val: string[] = e.target.value.split("");

    if (val.length > 15) return;
    if (!isPhoneNumberFormatValid(val) && !/^\d+$/g.test(val.join(""))) return;

    if (phoneNumber.length < val.length) {
      if (val.length === 1) {
        val.unshift("(");
      }
      if (val.length === 4) {
        val.push(")");
      }
      if (val.length === 5) {
        if (val[4] !== ")") {
          const removedVal = val[4];
          val.splice(4, 1);
          val.push(")");
          val.push(" ");
          val.push(removedVal);
        } else {
          val.push(" ");
        }
      }
      if (val.length === 9) {
        val.push("-");
      }
      if (val.length === 10) {
        if (/^[0-9]*$/.test(val[9])) {
          const removedVal = val[9];
          val.splice(9, 1);
          val.push("-");
          val.push(removedVal);
        }
      }
      if (val.length === 12) {
        val.push("-");
      }
      if (val.length === 13) {
        if (/^[0-9]*$/.test(val[12])) {
          const removedVal = val[12];
          val.splice(12, 1);
          val.push("-");
          val.push(removedVal);
        }
      }
    }
    setPhoneNumber(val.join(""));
  };

  const handleCreditCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val: string[] = e.target.value.split("");
    if (val.length <= 19) {
      if (!isCreditCardFormatValid(val) && !/^\d+$/g.test(val.join(""))) return;
      if (creditCard.length < val.length) {
        if (val.length === 4) {
          val.push("-");
        }
        if (val.length === 5 && /^\d+$/g.test(val[4])) {
          const removedVal = val[4];
          val.splice(4, 1);
          val.push("-");
          val.push(removedVal);
        }
        if (val.length === 9) {
          val.push("-");
        }
        if (val.length === 14) {
          val.push("-");
        }
      }
      setCreditCard(val.join(""));
    }
  };

  const handleSecurityCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (val.length <= 3) {
      setSecurityCode(val);
    }
  };

  const handleExpirationDateChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let val: string[] = e.target.value.split("");
    if (val.length <= 7) {
      if (!isExpiredDateFormatValid(val) && !/^\d+$/g.test(val.join("")))
        return;
      if (expirationDate.length < val.length) {
        if (val.length === 2) {
          val.push(" ");
          val.push("/");
          val.push(" ");
        }
        if (val.length === 3 && /^\d+$/g.test(val[2])) {
          const removedVal = val[2];
          val.splice(2, 1);
          val.push(" ");
          val.push("/");
          val.push(" ");
          val.push(removedVal);
        }
      }
      setExpirationDate(val.join(""));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (
      firstname &&
      lastname &&
      isEmailValid(email) &&
      isPostalCodeValid(postalCode) &&
      isPhoneNumberValid(phoneNumber) &&
      isCreditCardValid(creditCard) &&
      isSecurityCodeValid(securityCode) &&
      isExpirationDateValid(expirationDate)
    ) {
      console.log("firstname : ", firstname);
      console.log("lastname : ", lastname);
      console.log("email : ", email);
      console.log("postalCode : ", postalCode);
      console.log("phoneNumber : ", phoneNumber);
      console.log("creditCard : ", creditCard);
      console.log("securityCode : ", securityCode);
      console.log("expirationDate : ", expirationDate);
    }
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
              error={isFormSubmitted && !isEmailValid(email)}
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
              error={isFormSubmitted && !isPostalCodeValid(postalCode)}
              message="Please enter a valid Postal Code"
            />
          </FieldAddress>
          <FieldPhone>
            <TextField
              label="Phone Number"
              name="phone_number"
              placeholder="(212) 692-93-92"
              value={phoneNumber}
              handleInputChange={handlePhoneNumberChange}
              error={isFormSubmitted && !isPhoneNumberValid(phoneNumber)}
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
              error={isFormSubmitted && !isCreditCardValid(creditCard)}
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
              error={isFormSubmitted && !isSecurityCodeValid(securityCode)}
              message="Please enter a valid Security code"
            />
            <TextField
              label="Expiration date"
              name="expiration_date"
              placeholder="MM / YY"
              value={expirationDate}
              handleInputChange={handleExpirationDateChange}
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
