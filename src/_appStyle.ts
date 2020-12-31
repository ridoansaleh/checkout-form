import styled from "styled-components";

const Container = styled.div`
  min-width: 320px;
  background-color: #dedede;
`;

const Header = styled.header`
  padding: 10px 20px;
  box-shadow: 1px 5px 6px #c7c8c8;
  background-color: #fff;

  @media only screen and (min-width: 1024px) {
    padding: 10px 50px;
  }
`;

const WebsiteIcon = styled.div`
  height: 40px;
  width: 40px;
  background-color: #646768;
  border-radius: 5px;
`;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  min-height: 80vh;
  padding: 20px;

  @media only screen and (min-width: 1024px) {
    padding: 50px;
  }
`;

const CheckoutWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media only screen and (min-width: 1024px) {
    flex-direction: row;

    form {
      width: calc(100% - 340px);
      margin-right: 40px;
    }
  }
`;

const PageTitle = styled.h1`
  text-transform: uppercase;
  font-size: 26px;
  margin: 0;
`;

const PartTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 40px;
  margin-bottom: 16px;
  font-size: 17px;

  > div {
    margin-right: 15px;
  }
  h2 {
    font-size: 17px;
  }
`;

const Number = styled.div`
  color: #fff;
  background-color: #010606;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  height: 16px;
  width: 16px;
  margin-left: 16px;
`;

const FieldName = styled.div`
  display: flex;

  > div:nth-child(1) {
    margin-right: 20px;
  }

  > div {
    width: calc((100% - 20px) / 2);
  }

  @media only screen and (min-width: 1024px) {
    margin-left: 45px;
  }
`;

const FieldEmail = styled.div`
  margin-top: 24px;

  @media only screen and (min-width: 1024px) {
    margin-left: 45px;
  }
`;

const FieldAddress = styled.div`
  display: flex;
  margin-top: 24px;

  > div:nth-child(1) {
    margin-right: 20px;
  }

  > div {
    width: calc((100% - 40px) / 2);
  }

  @media only screen and (min-width: 1024px) {
    margin-left: 45px;
  }
`;

const FieldPhone = styled.div`
  margin-top: 24px;

  @media only screen and (min-width: 1024px) {
    margin-left: 45px;
  }
`;

const FieldCreditCard = styled.div`
  @media only screen and (min-width: 1024px) {
    margin-left: 45px;
  }
`;

const FieldCardDetail = styled.div`
  display: flex;
  margin-top: 24px;

  > div:nth-child(1) {
    margin-right: 20px;
  }

  > div {
    width: calc((100% - 20px) / 2);
  }

  @media only screen and (min-width: 1024px) {
    margin-left: 45px;
  }
`;

const Button = styled.button`
  background-color: #39a839;
  width: 100%;
  height: 63px;
  border: 0;
  margin-top: 40px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
  border-radius: 5px;

  @media only screen and (min-width: 1024px) {
    width: calc(100% - 45px);
    margin-left: 45px;
  }
`;

const ShoppingCart = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const ProductDetail = styled.section`
  width: 100%;
  height: 327px;
  margin-top: 40px;
  background-color: #fff;
  border-radius: 5px;
  padding: 6px;
  box-sizing: border-box;

  @media only screen and (min-width: 1024px) {
    width: 300px;
    margin-top: 105px;
  }
`;

const Frame = styled.div`
  border: 1px dotted #d6d6d6;
  padding: 20px;
  height: calc(100% - 42px);
`;

const ProductDetailTitle = styled.h2`
  margin-top: 0;
  font-size: 17px;
  font-weight: 700;
  text-transform: uppercase;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const LineDots = styled.div`
  border-top: 2px dotted #d6d6d6;
  margin: 20px 0 10px;
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;

  > div:nth-child(2) {
    font-size: 25px;
  }
`;

export {
  Container,
  Header,
  WebsiteIcon,
  PageTitle,
  Content,
  CheckoutWrapper,
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
  ProductDetail,
  Frame,
  ProductDetailTitle,
  Item,
  LineDots,
  TotalPrice,
};
