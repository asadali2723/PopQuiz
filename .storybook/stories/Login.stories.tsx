import React from 'react';
import {Story, Meta} from '@storybook/react-native';
import Login from '../../src/screens/Login';
import {LoginProvider} from '../../src/context/loginContext'; // Assuming you're using this context
import {Provider} from 'react-redux';
import allReducers from '../../src/redux/reducer'; // Adjust with your rootReducer
import {createStore} from 'redux';
import {action} from '@storybook/addon-actions';

// Mock Redux store
const store = createStore(allReducers);

export const mockLoginData = {
  username: 'john_doe',
  password: 'password123',
  error: null, // Change to error messages to simulate invalid login
  isSubmitting: false, // Set to true for loading state
};

export default {
  title: 'Screens/Login',
  component: Login,
} as Meta;

// Mock Login Context Provider for Storybook
const MockLoginProvider = ({children}: {children: React.ReactNode}) => {
  return <LoginProvider>{children}</LoginProvider>;
};

const Template: Story = args => (
  <Provider store={store}>
    <MockLoginProvider>
      <Login {...args} />
    </MockLoginProvider>
  </Provider>
);

export const Default = Template.bind({});
Default.args = {
  isSubmitting: false,
};

export const Submitting = Template.bind({});
Submitting.args = {
  isSubmitting: true, // Simulate loading
};

export const Error = Template.bind({});
Error.args = {
  error: 'Invalid credentials', // Simulate form error
};
