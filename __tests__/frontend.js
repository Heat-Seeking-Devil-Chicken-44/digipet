/**
 * @jest-environment jsdom
 */

//import react
import React from 'react';

import { render, screen, waitFor } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
//import all the components

import Dropdown from '../src/components/Dropdown';
import fetchMock from 'jest-fetch-mock';
import App from '../src/components/App';
import CreatePage from '../src/components/CreatePage';
import Form from '../src/components/Form';
import PetPage from '../src/components/PetPage';
import StatusBar from '../src/components/StatusBar';

//set up testing chunk
//test if text renders in dropdown
describe(App, () => {
  it('test dropdown', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Check on your current pets!/i)).toBeInTheDocument();
  });
});
