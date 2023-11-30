//import react
import React from 'react';

//testing chunk
//// const react = require('react');
//import react render
const reactRender = require('react-router');
//import reder, screen and wait for from testing library
// import { render, screen, waitFor } from '@testing-library/react';
const { render, screen, waitFor } = require('@testing-library/react');
//import regenerator runtime
const regeneratorRuntime = require('regenerator-runtime');
//import userEvent
const userEvent = require('@testing-library/user-event');
//import all the components
import Dropdown from '../src/components/Dropdown';
const app = require('../src/components/App');
const createPage = require('../src/components/CreatePage');
// const dropDown = require('../src/components/Dropdown');
const form = require('../src/components/Form');
const petPage = require('../src/components/PetPage');
const statusBar = require('../src/components/StatusBar');

//set up testing chunk
describe('React component tests', () => {
  describe('dropDown render test', () => {
    //renders dropdown component without crashing
    it('renders dropDown without crashing', () => {
      render(<Dropdown />);

      //use getByText to check if text content is present
      const dropDownText = screen.getByText('Check on your current pets!');

      //assert that the text/content is present
      expect(dropDownText).toBeInTheDocument();
    });
  });
});
