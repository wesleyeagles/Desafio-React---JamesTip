import styled, { css } from 'styled-components'


const StyledLink = styled('li')<{light: boolean}> `

color: white;
font-weight: 800;
text-transform: uppercase;

${props =>
    props.light &&
    css`
      color: #00D0B3;
    `};

`

export default StyledLink

