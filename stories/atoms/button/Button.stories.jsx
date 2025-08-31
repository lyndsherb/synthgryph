import React from 'react';
import { fn } from 'storybook/test';
import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    type: 'primary',
    children: <>Primary button</>,
  },
};

export const Secondary = {
  args: {
    type: 'secondary',
    children: <>Secondary button</>,
  },
};
