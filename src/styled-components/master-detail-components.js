import styled from 'styled-components'

export const PreviewHeader = styled.h4`
 margin-top: 5px;
 text-transform: uppercase;
 letter-spacing: 3px;
 font-family:'Khand', sans-serif;
`;

export const PreviewParagraph = styled.p`
 letter-spacing: 2px;
 font-family:'Khand', sans-serif;
`;

export const DetailedParagraph = styled.span`
 letter-spacing: 1.1px;
 font-size: 1.1em;
 font-family:'Khand', sans-serif;
`;

export const DetailedDescription = DetailedParagraph.extend`
 text-align: justify;
 font-family:'Khand', sans-serif;
`;
