import styled from "styled-components";


const SocialWrapper = styled.div`
width: 100%;


`;

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 1rem;

p{
    margin-top: 1rem;
}

img{
    width: 50px;
    @media screen and (max-width: 768px){
    width: 40px;
}
}

`;

export { SocialWrapper, Container };