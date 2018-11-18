import { css } from 'styled-components'

export const colors = {
  navy: '#002C71',
  lightBlue: '#8298B9',
  gray: '#444444',
  orange: '#FFA640',
  lightGray: '#EBEBEB'
}

export const media = {
  min320: (...args) => css`
    @media (min-width: 320px) {
      ${css(...args)};
    }
  `,
  min500: (...args) => css`
    @media (min-width: 500px) {
      ${css(...args)};
    }
  `
}

export const pageCommon = {
  fontSize: '14px',
  lineHeight: '18px',
  fontFamily: '"Montserrat", sans-serif'
}

export const boxShadow = {
  boxShadow: '0px 0px 4px 0px #ACACAC',
  borderRadius: '10px'
}
