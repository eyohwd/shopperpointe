
import styled from "styled-components";
import {mobile} from "../responsive"
import { Link } from "react-router-dom";

const Container = styled.div`
   flex: 1;
   margin: 5px;
   height: 60vh;
   position: relative;
   background-color: lightgray;
   display: flex;
  justify-content: center;
  ${mobile({
   padding: "10px",
  
  })}

`;
const Image = styled.img`

  width: 85%;
  height: 90%;
 // object-fit: cover;
 
 ${mobile({
  height: "45vh",
 //backgroundColor: "lightgray",
 //display: "flex",
//justifyContent: "center",

})}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;
const Title = styled.h1`
   color: black;
   margin-bottom: 20px;
`;
const Button = styled.button`
  // border: none;
   padding: 10px;
   //background-color: white;
  // color: gray;
  cursor: pointer;
  font-weight: 600;


`;

const CategoryItem = ({item}) => {
  return (
    <Container>
<Link to={`/products/${item.cat}`}>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        
        <Button>SHOP NOW</Button>
        
        </Info>
        </Link>
    </Container>
  );
}

export default CategoryItem;