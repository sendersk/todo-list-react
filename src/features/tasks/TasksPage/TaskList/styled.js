import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.color.alto};

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({done}) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    border: none;
    color: ${({ theme }) => theme.color.white};
    width: 30px;
    height: 30px;
    padding: 0;
    transition: background 0.3s;

    ${({toggleDone}) => toggleDone && css`
        background: ${({ theme }) => theme.color.forestGreen}; 
    `}

    ${({edit}) => edit && css`
        background-color: #f5bd22;
    `}

    ${({save}) => save && css`
        background-color: #f5bd22;
        font-size: unset;
        width: unset;
        padding: 0 10px;
    `}

    ${({remove}) => remove && css`
        background: ${({ theme }) => theme.color.crimson};
    `}

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({theme}) => theme.color.teal};
    transition: 0.3s;
    text-transform: none;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }
`;

export const EditableContent = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 10px;
    align-items: center;
`;

export const ContentInput = styled.input`
    width: 100%;
    padding: 5px;
    border: 1px solid yellow;
    background-color: white;
    color: grey;
`;