import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"

interface Colors {
    color:string
}
const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``
const Desc = styled.p`
    margin: 20px 0px;

`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div<Colors>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=> props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
    flex:1;
    ppadding: 20px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    margin: 0;
    padding: 0;
    width: 50%;
    // height: 60px;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>KARTIFY</Logo>
                <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, possimus 
                    explicabo quod officiis qui suscipit dolores ab, at aperiam, est non culpa nihil 
                    maiores odio enim placeat asperiores illo distinctio.
                </Desc>
                <SocialContainer>
                    <SocialIcon  color="3b5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="e4405f">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55acee">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="e60023">
                        <Pinterest />
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
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact Us</Title>
                <ContactItem>
                    <Room style={{marginRight: "10px"}} /> Plot 111 Dogo Road, North Avenia 13645 
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight: "10px"}} /> +234 117 343 8763
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight: "10px"}} />contact@kartify.net
                </ContactItem>
                <Payment src="https://eportal.oscotechesaoke.edu.ng/collegepayment/images/isw_logo_new_combined_2.png" />
            </Right>
        </Container>
    )
}

export default Footer
