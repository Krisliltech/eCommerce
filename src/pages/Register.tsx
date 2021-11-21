import styled from "styled-components"

const Container = styled.div`
    width:100vw;
    height: 100vh;
    background-color:pink;
    display: flex;
    align-items: center;
    justify-content: center;
`
// const Another  = styled.div`
//     flex:1;
//     width:100%
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `
const Wrapper = styled.div`
    // flex:1;  
    width:40%;
    padding: 20px;
    background-color: whitesmoke;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 7px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0;
`
const Button = styled.button`
    width: 60%;
    // min-width: 100%;
    border: none;
    padding: 10px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    border-radius:5px;
`
const Contain = styled.div`
    margin: 20px 0px 5px 8px;
    display: flex;
    justify-content: center; 
    align-items: center; 
    fontSize: 15px;
`
const Link = styled.a`
    margin: 5px 0;
    font-size: 12px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    font-size: 13px;
    color: teal;

    &:hover{
        text-decoration: underline;
    }
`

const Register = () => {
    return (
        <Container>
            {/* <Another>sdcfygvhjknlkgkfhgjh</Another> */}
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="first name"/>
                    <Input placeholder="last name"/>
                    <Input placeholder="username"/>
                    <Input placeholder="email"/>
                    <Input placeholder="password"/>
                    <Input placeholder="confirm password"/>
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE ACCOUNT</Button>
                    <Contain>Already have an account?
                        <Link>Sign In</Link>
                    </Contain>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
