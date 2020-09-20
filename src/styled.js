import { NavLink } from "react-router-dom";
import styled from "styled-components";
const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    font-size: 20px;
    text-decoration: none;
    background-color: ${({theme}) => theme.color.teal};
    color: ${({theme}) => theme.color.white};
    padding: 10px;
    transition: 0.3s;

    &.${activeClassName} {
        filter: brightness(120%);
        border-bottom: 3px solid ${({theme}) => theme.color.white};
        font-weight: bold;
    }
`;

export const Navigation = styled.ul`
    background-color: ${({theme}) => theme.color.teal};
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    list-style: none;
    padding: 20px;

    &:hover {
        filter: brightness(110%);
    }
`;