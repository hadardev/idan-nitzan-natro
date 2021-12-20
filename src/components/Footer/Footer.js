import React from 'react';
import BEMHelper from 'react-bem-helper';

import './inline-assets/style/footer.scss';

import contactImage from './../../assets/images/artistic-blossom-bright-207962_1.jpg';
import whatsapp from './../../assets/icons/social/whatsapp-svgrepo-com.svg';
import facebook from './../../assets/icons/social/facebook-svgrepo-com.svg';
import instagram from './../../assets/icons/social/instagram-2-1-logo-svgrepo-com.svg';
import gmail from './../../assets/icons/social/google-gmail-svgrepo-com.svg';

const className = new BEMHelper('footer');

const Footer = () => {
    const facebookPage = 'https://www.facebook.com/%D7%A2%D7%99%D7%93%D7%9F-%D7%A0%D7%99%D7%A6%D7%9F-%D7%A8%D7%A4%D7%95%D7%90%D7%94-%D7%98%D7%91%D7%A2%D7%99%D7%AA-356931294465525';
    return (
        <div {...className()}>
            <div {...className('inner-container')}>
                <img {...className('bottom-img')} src={contactImage} alt="heart" />
                <p dir="rtl">עידן ניצן 052-4698738 ☎</p>
                <ul {...className('social-list')}>
                    <li><a href="https://api.whatsapp.com/send?phone=9720524698738"><img src={whatsapp} alt="whatsapp"/></a></li>
                    <li><a href={facebookPage} target="_blank" rel="noreferrer"><img src={facebook} alt="facebook"/></a></li>
                    <li><a href="https://www.instagram.com/idan.nitzan/" target="_blank" rel="noreferrer"><img src={instagram} alt="instagram"/></a></li>
                    <li><a href="mailto:idan.nitzan.nd@gamil.com"><img src={gmail} alt="gmail"/></a></li>
                </ul>
            </div>
            <p {...className('copy-right')} dir="ltr">© All rights reserved</p>
        </div>
    );
}

export default Footer;
