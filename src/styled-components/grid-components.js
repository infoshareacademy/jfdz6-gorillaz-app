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

const gridBasis = 12

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 10px;
  
${media.tablet`width: 750px;`}
${media.desktop`width: 970px;`}
${media.largeDesktop`width: 1170px;`}
`

export const Box = styled.div`
  padding: 10px;
  width: ${props => props.xs ? (props.xs / gridBasis) * 100 : 100}%;
  
${media.tablet`width: ${props => (props.sm || props.xs || gridBasis) / gridBasis * 100}%;`}
${media.desktop`width: ${props => (props.md || props.sm || props.xs || gridBasis) / gridBasis * 100}%;`}
${media.largeDesktop`width: ${props => (props.lg || props.md || props.sm || props.xs || gridBasis) / gridBasis * 100}%;`}

${media.tablet`order: ${props => (props.smPush || props.xsPush || 0)};`}
`