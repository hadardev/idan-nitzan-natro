/** @jsxImportSource @emotion/react */
import siteLogo from './../../assets/siteLogo.jpeg'
import { NavContainerStyle, logoStyle } from './inline-assets/style/index.style';
import hideNavBarOnScroll from './inline-assets/js/hideNavBarOnScroll';


const Nav = () => {
    
    return (
        <div css={NavContainerStyle} id="navBar">
            <div>
                <img css={logoStyle} alt="sitelogo" src={siteLogo} />
            </div>
        </div>
    );
}

export default Nav;
