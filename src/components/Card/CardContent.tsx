import styled from 'styled-components';
import naturalGrow from '../shared/animations/naturalGrow';
import { PositionProps, compose, position, bottom, top, left, right } from 'styled-system';
import Box from './Box';
import { Card, bgAndBorders } from '.';

export type CardContent = Card & PositionProps;

const content = compose(position, top, left, right, bottom, bgAndBorders);

const CardContent = styled(Box)<CardContent>`
  padding: 0.5rem;
  transform: scale(1);
  animation: ${naturalGrow} 250ms cubic-bezier(0.22, 0.61, 0.36, 1);
  ${content}
`;
export default CardContent;
