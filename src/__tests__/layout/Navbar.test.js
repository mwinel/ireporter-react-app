import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Navbar from '../../components/Layout/Navbar';

describe('Navbar Component', () => {
  let NavbarComponent = shallow(<Navbar />)
  it('Should match snapshot', () => {
    expect(toJson(NavbarComponent)).toMatchSnapshot();
  });
});
