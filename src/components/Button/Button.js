/** @jsxImportSource @emotion/react */

import { ButtonStyle } from './inline-assets/Button.style';

const Button = ({ text = '' }) => {
    return (
        <div css={ButtonStyle}>
            <div>{text}</div>
            <link />
        </div>
    );
}

export default Button;
