import React, { ComponentProps, FunctionComponent } from 'react';
import Card from '.';
import CardContent from './CardContent';
import Typography from '../Typography';
import Flex from './Flex';
import Logo from '../shared/assets/Arcadis.svg';
import BrandLogo from '../shared/assets/Arcadis-Brand.png';

export default {
  title: 'Card',
  component: Card,
  args: {
    type: 'user',
  },
};

const cardImageText = (content: string): JSX.Element => (
  <Typography margin="1rem" fontWeight="lighter" color="#fff" variant="h2">
    {content}
  </Typography>
);
export const Basic = () => (
  <div>
    <Flex justifyContent="space-evenly">
      <Card height="15rem">
        <CardContent borderBottom="1px solid #ccc">
          <Typography m="0" variant="h2" fontWeight="lighter">
            Basic Card
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex rerum consequuntur iusto
            animi deleniti ducimus neque cum iste esse, et itaque quaerat iure ullam quod doloremque
            provident optio quam sint!
          </Typography>
        </CardContent>
        <CardContent borderTop="1px solid #ccc">
          <Typography variant="span">Details</Typography>
        </CardContent>
      </Card>

      <Card>
        <CardContent
          position="absolute"
          backgroundImage={`url(${Logo})`}
          backgroundSize="cover"
          backgroundPosition="50% 60%"
          width="100%"
          height="13rem"
        />
        <CardContent mt="12rem">
          <Typography variant="h1"> Card With Image </Typography>
          <Typography variant="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illo, voluptate autem
            eum cumque aut distinctio provident earum animi similique.
          </Typography>
        </CardContent>
        <CardContent borderTop="1px solid #ccc">
          <Typography m="0" variant="h4" textAlign="center">
            Type Details....
          </Typography>
        </CardContent>
      </Card>

      <Card
        backgroundImage={`url(${BrandLogo})`}
        backgroundPosition="center"
        backgroundSize="cover"
      >
        <CardContent position="absolute" top="0" left="0">
          {cardImageText('Air Max')}
        </CardContent>
        <CardContent position="absolute" bottom="0" right="0">
          {cardImageText('$200')}
        </CardContent>
      </Card>
    </Flex>
  </div>
);
