import styled from "styled-components"
import Annoucement from "../components/Annoucement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"

const Container = styled.div``
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img``
const InfoContainer = styled.div`
    flex: 1;
`
const Title = styled.h1``
const Desc = styled.p``
const Price= styled.span``

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Annoucement />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.pinimg.com/564x/61/b5/be/61b5bead0e90175666a7ecdbf18d2f91.jpg"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Shirt</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit inventore nobis placeat et quam eum assumenda delectus hic incidunt animi amet unde velit laboriosam tempora dolores dicta, rem voluptates eius?</Desc>
                    <Price># 10,000</Price>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product
