import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
export const Header = styled.header`
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 15px 0px;
  padding: 20px;
`;

export const NavWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 8px;
  padding-right: 8px;
  width: 1200px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 20px;
`;

export const NavList = styled.ul`
  height: 100%;
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
`;

export const NavItem = styled.li`
  &:hover {
    color: #ff6600;
    fill: #ff6600;
    stroke-opacity: 1;
    transition: stroke 0.3s;
  }
`;
export const NavItemContacts = styled.li`
  &:hover {
    color: #ff6600;
    fill: #ff6600;
    stroke-opacity: 1;
    transition: stroke 0.3s;
  }
`;

export const Logo = styled(NavLink)`
  min-width: 120px;
  font-family: Manrope;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  color: black;
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  &:hover {
    color: #ff6600;
    transform: scale(1.1);
    transition: transform 0.3s;
  }
`;
export const StyledLink = styled(Link)({
  color: " black",
  fontFamily: "Montserrat",
  fontSize: "18px",

  fontWeight: "500",
  lineHeight: "normal",
  textDecoration: " none",
  cursor: "pointer",
  "&:hover": {
    color: " #ff6600",
    transition: "0.3s",
  },
});

export const LinkContacts = styled.a`
  color: black;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration: none;
  text-decoration: none;
  display: flex;

  align-items: center;
  justify-content: center;
  gap: 10px;
  &:hover {
    color: #ff6600;
    transition: 0.3s;
  }
`;
export const ImageHeader = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;
export const SVG = styled.svg``;

export const Cart = styled(NavLink)({
  border: "none",
  padding: "7px",
  backgroundColor: "transparent",
  cursor: "pointer",
  "&:hover": {
    fill: " #ff6600",
    transition: " fill 0.3s",
  },
});
