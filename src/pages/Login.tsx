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
    width:30%;
    padding: 20px;
    background-color: whitesmoke;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    display: flex;
    justify-content: center;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 7px;
`
const Button = styled.button`
    min-width: 40%;
    border: none;
    padding: 10px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    border-radius:7px;
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
const Contain = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center; 
    fontSize: 15px;
`

const Login = () => {
    return (
        <Container>
            {/* <Another>sdcfygvhjknlkgkfhgjh</Another> */}
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username"/>
                    <Input placeholder="password"/>
                    <Button>LOGIN</Button>
                    <Link>Forgot password?</Link>
                    <Contain>Don't have an account?
                        <Link>Sign Up</Link>
                    </Contain>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
