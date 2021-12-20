/** @jsxImportSource @emotion/react */
import Button from '../Button/Button';

import { heroCardStyle, heroCardImageStyle, contentStyle, titleStyle } from './inline-assets/HeroCard.style';

const Herocard = (props) => {
    const { text } = props;
    return (
        <div css={heroCardStyle}>
            <div css={heroCardImageStyle} style={{ backgroundImage: `url(${props.heroCardImage})` }}></div>
            <div css={contentStyle}>
                <h1 css={titleStyle}>עידן ניצן - רפואה טבעית</h1>
                <h2>נטרופת ND</h2>
                <Button text={text} />
            </div>
        </div>
    );
}

export default Herocard;
