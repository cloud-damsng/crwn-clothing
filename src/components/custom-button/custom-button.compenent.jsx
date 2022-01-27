import React from "react";

import 'C:/Users/tadams/crwn-clothing/src/components/custom-button/custom-button.styles.scss';

const CustomButton = ({children, ...otherProps})=> (
    <button className="custom-button" {...otherProps}>
    {children}
    </button>

);
export default CustomButton;