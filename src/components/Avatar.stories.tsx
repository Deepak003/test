import React, { ComponentProps, FunctionComponent } from 'react';

import { Avatar, AvatarType } from './Avatar';
import Avatar1 from './shared/assets/avatar/avatar1.png';
import Avatar2 from './shared/assets/avatar/avatar2.png';
export default {
  title: 'Avatar',
  component: Avatar,
  args: {
    type: 'user',
  },
};

const Base: FunctionComponent<ComponentProps<typeof Avatar>> = ({ src, ...props }) => (
  <div>
    <Avatar isLoading {...props} />
    <Avatar username="Deepak Tiwari" {...props} />
    <Avatar username="Deepak Tiwari" src={Avatar1} {...props} />
    <Avatar username="Santhosh" src={Avatar2} {...props} />
  </div>
);

export const Large = () => <Base size="large" />;

export const Medium = () => <Base />;

export const Small = () => <Base size="small" />;

export const Tiny = () => <Base size="tiny" />;

export const Organization = () => (
  <Base type={AvatarType.ORGANIZATION} username="Chromatic" src="/chromatic-logo-square.png" />
);
