import React from 'react';
import BEMHelper from 'react-bem-helper';
import './inline-assets/Treatments.scss';
import reflexology from './../../assets/icons/svg-icons-svgrepo-com/footprints-svgrepo-com.svg';
import natropathy from './../../assets/icons/svg-icons-svgrepo-com/mortar-svgrepo-com.svg';
import aromatherapy from './../../assets/icons/svg-icons-svgrepo-com/olive-oil-svgrepo-com (2).svg';
import herbs from './../../assets/icons/svg-icons-svgrepo-com/olive-oil-svgrepo-com (1).svg';
import reiki from './../../assets/icons/svg-icons-svgrepo-com/ecology1-svgrepo-com.svg';
import bach from './../../assets/icons/svg-icons-svgrepo-com/leaves-svgrepo-com.svg';


const className = new BEMHelper('treatments-section');

const Treatments = () => {
    return (
        <div {...className()}>
            <h2 {...className('title')}>סוגי טיפולים</h2>
            <ul {...className('treatments-list')}>
                <li {...className('treatments-list__item')}>
                    <img src={natropathy} alt="נטרופתיה" />
                    <h5>נטרופתיה</h5>
                </li>

                <li {...className('treatments-list__item')}>
                    <img src={reflexology} alt="רפלקסולוגיה" />
                    <h5>רפלקסולוגיה</h5>
                </li>

                <li {...className('treatments-list__item')}>
                    <img src={aromatherapy} alt="ארומתרפיה" /> 
                    <h5>ארומתרפיה</h5>
                </li>

                <li {...className('treatments-list__item')}>
                    <img src={herbs} alt="צמחי מרפא" /> 
                    <h5>צמחי מרפא</h5>
                </li>

                <li {...className('treatments-list__item')}>
                    <img src={bach} alt="פרחי באך" />
                    <h5>פרחי באך</h5>
                </li>

                <li {...className('treatments-list__item')}>
                    <img src={reiki} alt="רייקי" />
                    <h5>רייקי</h5>
                </li>
            </ul>
        </div>
    );
}

export default Treatments;
