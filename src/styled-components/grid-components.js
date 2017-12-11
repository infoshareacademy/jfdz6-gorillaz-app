import styled, {css} from 'styled-components'

const screenSizes = {
    tablet: 768,
    desktop: 992,
    largeDesktop: 1200
}

const media = Object.keys(screenSizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
		@media (min-width: ${screenSizes[label] / 16}em) {
			${css(...args)}
		}
	`

    return acc
}, {})

export const Container = styled.div`
  display: flex;
  background: red;
  margin: 0 auto;
  padding: 10px;
  
${media.tablet`width: 750px;`}
${media.desktop`width: 970px;`}
${media.largeDesktop`width: 1170px;`}
`