/* eslint-disable */

import React from 'react';
import '../App.css';
import MediaQuery from 'react-responsive';
import { useMediaQuery } from 'react-responsive';


function Test(){
    const isPc = useMediaQuery({
        query: "(min-width: 1024px) and (max-width: 1279px)"
    });
    const isTablet = useMediaQuery({
        query: "(min-width: 768px) and (max-width: 1023px)"
    });
    const isTabletPC = useMediaQuery({
        query: "(min-width: 768px) and (max-width: 1279px)"
    });
    const isMobileTablet = useMediaQuery({
        query: "(max-width: 1023px)"
    });
    const isMobile = useMediaQuery({
        query: "(max-width: 767px)"
    });
    return (
        <div>
            {isPc && <p>pc</p>}
            {isTablet && <p>tablet</p>}
            {isTabletPC && <p>tablet_pc</p>}
            {isMobileTablet && <p>mobile_tablet</p>}
            {isMobile && <p>mobile</p>}
        </div>
    );
}


export default Test;