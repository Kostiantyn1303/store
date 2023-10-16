import {
  NavItem,
  NavList,
  NavWrap,
  Logo,
  Header,
  StyledLink,
  LinkContacts,
  ImageHeader,
  SVG,
  NavItemContacts,
  Cart,
} from "./Header.styled";
import sprite from "../../images/sprite.svg";
import LogoImg from "../../images/Logo-2.png";
const AppBar = () => {
  return (
    <>
      <Header>
        <NavWrap>
          <Logo to="/">
            <ImageHeader src={LogoImg} alt="logo" />
            SHOP EASY
          </Logo>
          <NavList>
            <NavItem>
              <StyledLink to="hero" smooth={true} duration={500}>
                Про нас
              </StyledLink>
            </NavItem>

            <NavItem>
              <StyledLink to="services" smooth={true} duration={500}>
                Доставка/Оплата
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="team" smooth={true} duration={500}>
                Повернення товару
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="blog" smooth={true} duration={500}>
                Контакти
              </StyledLink>
            </NavItem>
          </NavList>
          <NavList>
            <NavItemContacts>
              {" "}
              <LinkContacts
                href="mailto:info@devstudio.com"
                class="site-nav__contacts-link"
              >
                <SVG width="16" height="16">
                  <use href={sprite + "#icon-mail2"} />
                </SVG>
                info@devstudio.com
              </LinkContacts>
            </NavItemContacts>
            <NavItemContacts>
              <LinkContacts
                href="tel:+380961111111"
                class="site-nav__contacts-link"
              >
                <SVG width="16" height="16">
                  <use href={sprite + "#icon-phone"} />
                </SVG>
                +38 096 111 11 11
              </LinkContacts>
            </NavItemContacts>
            <NavItemContacts>
              {" "}
              <Cart to="/parches">
                <SVG width="24" height="24">
                  <use href={sprite + "#icon-cart"} />
                </SVG>
              </Cart>
            </NavItemContacts>
          </NavList>
        </NavWrap>
      </Header>
    </>
  );
};
export default AppBar;
