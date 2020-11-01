import styled from "styled-components";

export const ButtonContainer=styled.button`
    font-size:20px;
    border-radius: 0.5rem;
    padding:10px;
    color:var(--mainYellow);
    background:transparent;
    border: solid var(--mainBlue);
    transistion:all 0.5s ease-in-out;
    &:hover{
        background:var(--mainYellow);
        color:var(--mainBlue);
    }
`;