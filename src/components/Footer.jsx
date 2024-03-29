import styled from "styled-components";
import {mobile} from "../responsive"
import { Facebook, Instagram, MailOutlined, Phone, Pinterest, Room, Twitter } from "@mui/icons-material";

const Container = styled.div`
   display: flex;
   ${mobile({flexDirection: "column"})}
`;
const Left = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
   display: flex;
`;
const SocialIcon = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   color: white;
   background-color: #${props=>props.color};
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 20px;
`;


const Center = styled.div`
   flex: 1;
   padding: 20px;
   ${mobile({display: "none"})}

`;
const Title = styled.h3`
   margin-bottom: 30px;
`;
const List = styled.ul`
   margin: 0;
   padding: 0;
   list-style: none;
   display: flex;
   flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({backgroundColor: "#eee"})}
`;
const ContactItem = styled.div`
   margin-bottom: 20px;
   display: flex;
   align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LEKHO</Logo>
        <Desc>
            The Product you buy from Lekho shop are of very high quality.
            You get velue for your money spent and our services of excellent.
             Enjoy your shopping with us.
        </Desc>
        <SocialContainer>
            <SocialIcon color="3B5999">
                <Facebook/>
            </SocialIcon>
            <SocialIcon color="E4405F">
                <Instagram/>
            </SocialIcon>
            <SocialIcon color="55ACEE">
                <Twitter/>
            </SocialIcon>
            <SocialIcon color="E60023">
                <Pinterest/>
            </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><Room style={{ marginRight: "10px"}}/>
            21road Festac Town Lagos
        </ContactItem>
        <ContactItem><Phone style={{ marginRight: "10px"}}/>
            +234 09048352615
        </ContactItem>
        <ContactItem><MailOutlined style={{ marginRight: "10px"}}/>
            ehiboy@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  );
}

export default Footer;
