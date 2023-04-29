import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
justify-content: center;
margin-top: 3rem;

.success
{
    margin: 2rem;
    color: ${({theme}) => theme.colors.text};
}

form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    text-align: center;

    .title{
        font-weight: 500;
        margin: 1rem 0 .7rem 0;
        font-size: 2rem;
        color: ${({theme}) => theme.colors.text};

    }
    label{
        display: flex;
        text-align: center;
        flex-direction: column-reverse;
        justify-content: center;
    }

    input{
       display: none;
       
    }
    .icon{
        cursor: pointer;
        margin: 0 auto;
        margin-top: .4rem;
       }
}

`;


export { Wrapper}
