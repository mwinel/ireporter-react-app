import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import Home from '../components/Home';

const storeItems = {};
const middlewares = [thunk]
const mockStore = configureStore(middlewares);
const store = mockStore(storeItems);

const props = {
  fetchIncidents: jest.fn(),
  getState: jest.fn()
}

describe('Home Component', () => {
  let wrapper = shallow(<Home {...props} store={store} />)
  it('Should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
