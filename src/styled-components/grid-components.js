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
  margin: 0 auto;
  padding: 15px;
  
${media.tablet`width: 750px;`}
${media.desktop`width: 970px;`}
${media.largeDesktop`width: 1170px;`}
`

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  flex-wrap: ${props => props.wrap || 'wrap'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'flex-start'};
`

export const FlexBox = styled.div`
  display: ${props => props.display || 'block'};
  padding: 0 15px;
  flex: ${props => props.xsFlex || '0 0 100%'};
  order: ${props => props.xsOrder || '0'};
  align-self: ${props => props.align || 'flex-start'};
  overflow: hidden;
  
  ${props => props.smFlex && media.tablet`flex: ${props => props.smFlex};`}
  ${props => props.mdFlex && media.desktop`flex: ${props => props.mdFlex};`}
  ${props => props.lgFlex && media.largeDesktop`flex: ${props => props.lgFlex};`}
  
  ${props => props.smOrder && media.tablet`order: ${props => props.smOrder};`}
  ${props => props.mdOrder && media.desktop`order: ${props => props.mdOrder};`}
  ${props => props.lgOrder && media.largeDesktop`order: ${props => props.lgOrder};`}
`


export const Box = styled.div`
  padding: 0 15px;
  width: ${props => props.xs ? (props.xs / gridBasis) * 100 : 100}%;
  
${media.tablet`width: ${props => (props.sm || props.xs || gridBasis) / gridBasis * 100}%;`}
${media.desktop`width: ${props => (props.md || props.sm || props.xs || gridBasis) / gridBasis * 100}%;`}
${media.largeDesktop`width: ${props => (props.lg || props.md || props.sm || props.xs || gridBasis) / gridBasis * 100}%;`}

${media.tablet`order: ${props => (props.smPush || props.xsPush || 0)};`}
`