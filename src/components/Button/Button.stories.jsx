// src/components/Button.stories.js
import React from 'react';
import Button from './Button';

export default {
    title: 'Example/Button',
    component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Primary Button',
    backgroundColor: '#007bff',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Secondary Button',
    backgroundColor: '#6c757d',
};

export const Large = Template.bind({});
Large.args = {
    label: 'Large Button',
    size: 'large',
};

export const Small = Template.bind({});
Small.args = {
    label: 'Small Button',
    size: 'small',
};
