import styled from "styled-components";

const Container = styled.div`
  background-color: #f6f6f6;
`;

const Header = styled.header`
  padding: 10px 50px;
  box-shadow: 1px 5px 6px #c7c8c8;
`;

const BlackBox = styled.div`
  height: 40px;
  width: 40px;
  background-color: #646768;
  border-radius: 5px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  min-height: 80vh;

  padding: 50px 50px;
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
  margin-left: 45px;

  > div:nth-child(1) {
    margin-right: 20px;
  }

  > div {
    width: calc((100% - 20px) / 2);
  }
`;

const FieldEmail = styled.div`
  margin-top: 24px;
  margin-left: 45px;
`;

const FieldAddress = styled.div`
  display: flex;
  margin-top: 24px;
  margin-left: 45px;

  > div:nth-child(1) {
    margin-right: 20px;
  }

  > div {
    width: calc((100% - 20px) / 2);
  }
`;

const FieldPhone = styled.div`
  margin-top: 24px;
  margin-left: 45px;
`;

const FieldCreditCard = styled.div`
  margin-left: 45px;
`;

const FieldCardDetail = styled.div`
  display: flex;
  margin-top: 24px;
  margin-left: 45px;

  > div:nth-child(1) {
    margin-right: 20px;
  }

  > div {
    width: calc((100% - 20px) / 2);
  }
`;

const Button = styled.button`
  background-color: #39a839;
  width: calc(100% - 45px);
  height: 63px;
  border: 0;
  margin-top: 40px;
  margin-left: 45px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
  border-radius: 5px;
`;

const ShoppingCart = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export {
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
};
