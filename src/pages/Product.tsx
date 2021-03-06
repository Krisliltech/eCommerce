import { Add, Remove } from "@material-ui/icons"
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
const Image = styled.img`
    width: 100%;
    height: 80vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0;
`
const Price= styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer= styled.div`
    width: 50%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
`
const Filter= styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle= styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor= styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0 5px;
    cursor: pointer;
`
const FilterSize= styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption= styled.option``
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Annoucement />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://media.istockphoto.com/photos/smiling-african-american-woman-in-white-tshirt-front-mock-up-picture-id1254214920?b=1&k=20&m=1254214920&s=170667a&w=0&h=n-k98uukZoOHATwYWVWs8JpLDlhQ6w1EsaoTJxFj8ig="/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Shirt</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit inventore nobis placeat et quam eum assumenda delectus hic incidunt animi amet unde velit laboriosam tempora dolores dicta, rem voluptates eius?</Desc>
                    <Price># 3,000</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="gray" />
                            <FilterColor color="black" />
                            <FilterColor color="blue" />
                            <FilterColor color="red" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                                <FilterSizeOption>XXL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product
