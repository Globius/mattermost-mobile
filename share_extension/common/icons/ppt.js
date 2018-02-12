// Copyright (c) 2017-present Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import Svg, {
    G,
    Path
} from 'react-native-svg';

function PptSvg({height, width}) {
    return (
        <View style={{height, width, alignItems: 'flex-start'}}>
            <Svg
                width={width}
                height={height}
                viewBox='0 0 24 32'
            >
                <G
                    stroke='none'
                    strokeWidth={1}
                    fillRule='evenodd'
                >
                    <G
                        transform='translate(-1023.000000, -1991.000000)'
                        fillRule='nonzero'
                        fill='#1875F0'
                    >
                        <G transform='translate(78.000000, 1991.000000)'>
                            <G transform='translate(945.000000, 0.000000)'>
                                <G>
                                    <G>
                                        <Path d='M23.3333333,32 L0.666666667,32 C0.298666667,32 0,31.7013333 0,31.3333333 L0,8.66666667 C0,8.48933333 0.0706666667,8.32 0.194666667,8.19466667 L8.19466667,0.194666667 C8.32,0.0706666667 8.48933333,0 8.66666667,0 L23.3333333,0 C23.7013333,0 24,0.298666667 24,0.666666667 L24,31.3333333 C24,31.7013333 23.7013333,32 23.3333333,32 Z M1.33333333,30.6666667 L22.6666667,30.6666667 L22.6666667,1.33333333 L8.94266667,1.33333333 L1.33333333,8.94266667 L1.33333333,30.6666667 Z'/>
                                        <Path d='M8.66666667,9.33333333 L0.666666667,9.33333333 C0.298666667,9.33333333 0,9.03466667 0,8.66666667 C0,8.29866667 0.298666667,8 0.666666667,8 L8,8 L8,0.666666667 C8,0.298666667 8.29866667,0 8.66666667,0 C9.03466667,0 9.33333333,0.298666667 9.33333333,0.666666667 L9.33333333,8.66666667 C9.33333333,9.03466667 9.03466667,9.33333333 8.66666667,9.33333333 Z'/>
                                    </G>
                                </G>
                                <G transform='translate(6.000000, 13.000000)'>
                                    <Path d='M11.8181818,4.72727273 L10.0454545,4.72727273 L10.0454545,2.95454545 C10.0454545,2.62836364 9.78072727,2.36363636 9.45454545,2.36363636 L7.68181818,2.36363636 L7.68181818,0.590909091 C7.68181818,0.264727273 7.41709091,0 7.09090909,0 L1.18181818,0 C0.855636364,0 0.590909091,0.264727273 0.590909091,0.590909091 L0.590909091,7.68181818 C0.590909091,8.008 0.855636364,8.27272727 1.18181818,8.27272727 L2.95454545,8.27272727 L2.95454545,10.0454545 C2.95454545,10.3716364 3.21927273,10.6363636 3.54545455,10.6363636 L5.31818182,10.6363636 L5.31818182,12.4090909 C5.31818182,12.7352727 5.58290909,13 5.90909091,13 L11.8181818,13 C12.1443636,13 12.4090909,12.7352727 12.4090909,12.4090909 L12.4090909,5.31818182 C12.4090909,4.992 12.1443636,4.72727273 11.8181818,4.72727273 Z M1.77272727,7.09090909 L1.77272727,1.18181818 L6.5,1.18181818 L6.5,2.36363636 L3.54545455,2.36363636 C3.21927273,2.36363636 2.95454545,2.62836364 2.95454545,2.95454545 L2.95454545,7.09090909 L1.77272727,7.09090909 Z M4.13636364,9.45454545 L4.13636364,3.54545455 L8.86363636,3.54545455 L8.86363636,4.72727273 L5.90909091,4.72727273 C5.58290909,4.72727273 5.31818182,4.992 5.31818182,5.31818182 L5.31818182,9.45454545 L4.13636364,9.45454545 Z M11.2272727,11.8181818 L6.5,11.8181818 L6.5,5.90909091 L11.2272727,5.90909091 L11.2272727,11.8181818 Z'/>
                                </G>
                            </G>
                        </G>
                    </G>
                </G>
            </Svg>
        </View>
    );
}

PptSvg.propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
};

export default PptSvg;
