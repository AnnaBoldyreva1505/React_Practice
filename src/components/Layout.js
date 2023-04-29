import styled from "styled-components";

export const Wrapper = styled.div`
max-width: 960px;
padding: 0 16px;
display: flex;
flex-direction: column;
gap: 16px;
`

export const Layout = ({children}) => {
    return <Wrapper>
    <header>PAGE HEADER</header>
    <main>{children}</main>
    <footer>PAGE FOOTER</footer>
    </Wrapper>
}