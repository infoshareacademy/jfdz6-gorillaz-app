import styled from 'styled-components'

export const PreviewHeader = styled.h4`
 margin-top: 5px;
 text-transform: uppercase;
 letter-spacing: 3px;
`;

export const PreviewParagraph = styled.p`
 letter-spacing: 2px;
`;

export const DetailedParagraph = styled.span`
 letter-spacing: 1.1px;
 font-size: 1.1em;
`;

export const DetailedDescription = DetailedParagraph.extend`
 text-align: justify;
`;
