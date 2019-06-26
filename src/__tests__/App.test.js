import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../components/App';

describe('App Component', () => {
  let wrapper = shallow(<App />)
  it('Should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
