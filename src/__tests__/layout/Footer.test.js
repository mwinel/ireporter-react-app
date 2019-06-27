import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from '../../components/Layout/Footer';

describe('Footer Component', () => {
  let FooterComponent = shallow(<Footer />)
  it('Should match snapshot', () => {
    expect(toJson(FooterComponent)).toMatchSnapshot();
  });
});
