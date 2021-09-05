import PropTypes from 'prop-types';
import styled, { bottom, flex, height, left, position, right, style, top } from 'styled-components';

import { pointerEvents } from '../lib/styled-system-custom-properties';

const pointerEvents = style({
    prop: 'pointerEvents',
});

const breakpoints = {
  xs: '@media screen and (max-width: 40em)',
  sm: '@media screen and (min-width: 40em) and (max-width: 52em)',
  md: '@media screen and (min-width: 52em) and (max-width: 64em)',
  lg: '@media screen and (min-width: 64em)',
};

const hidden = key => props =>
  props[key]
    ? {
        [breakpoints[key]]: {
          display: 'none',
        },
      }
    : null;

const xs = hidden('xs');
const sm = hidden('sm');
const md = hidden('md');
const lg = hidden('lg');

const Hide = styled.div`
  ${xs}
  ${sm}
  ${md}
  ${lg}
  ${bottom}
  ${height}
  ${left}
  ${pointerEvents}
  ${position}
  ${right}
  ${top}
  ${flex}
`;

Hide.propTypes = {
  xs: PropTypes.bool,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  ...bottom.propTypes,
  ...height.propTypes,
  ...left.propTypes,
  ...position.propTypes,
  ...right.propTypes,
  ...top.propTypes,
};

export default Hide;