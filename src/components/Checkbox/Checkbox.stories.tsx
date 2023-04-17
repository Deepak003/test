import React from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

export const All = () => (
  <div>
    <Checkbox id="cb1" label="Enabled" disabled={false} />
    <Checkbox disabled id="cb2" label="Disabled" />
  </div>
);
