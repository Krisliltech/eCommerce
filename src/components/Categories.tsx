import styled from "styled-components"
import CategoryItem from "./CategoryItem"
import { categories } from "./data"

// interface Items {
//     id:number,
//     img:string,
//     title:string
// }
const Container= styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`

const Categories = () => {
    return (
        <Container>
            {categories.map(el=>(
                <CategoryItem item={el} key={el.id}/>
            ))}
        </Container>
    )
}

export default Categories


