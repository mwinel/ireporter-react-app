import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import fetchMock from 'fetch-mock'
import loginReducer from '../../redux/reducers/loginReducer';
import loginAction from '../../redux/actions/loginAction';
import { Login } from '../../components/Login';
import { loginTypes } from '../../redux/types';

const storeItems = {};
const middlewares = [thunk]
const mockStore = configureStore(middlewares);
const store = mockStore(storeItems);

const initialState = {};

const props = {
  username: '',
  password: '',
  onChange: jest.fn(),
  onSubmit: jest.fn(),
  login: jest.fn(),
  preventDefault: jest.fn()
}

const mockEvent = {
  preventDefault: jest.fn()
}

describe('Login Component', () => {
  let LoginComponent = shallow(<Login {...props} store={store}/>)
  it('Should match snapshot', () => {
    LoginComponent.instance().onSubmit(mockEvent);
    expect(toJson(LoginComponent)).toMatchSnapshot();
  });

  it('should trigger onChange on login', () => {
    const login = { 
      username: 'test',
      password: 'test'
    }
    const evt = {
      preventDefault: jest.fn(),
      target: login
    }
    expect(LoginComponent.instance().onChange(evt));
  });
});

describe("login success", () => {
  it('tests login success', () => {
    const newState = loginReducer(initialState,
      { type: loginTypes.LOGIN_SUCCESS });
    expect(newState).toEqual({});
  });
});

describe("login action", () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it("creates LOGIN_SUCCESS when logging in a user", () => {
    fetchMock.post('*', {
      body: {
        username: 'mwinelnnnnn',
        password: 'password'
      },
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
      { type: loginTypes.LOGIN_SUCCESS, 
        payload: {
          username: 'mwinelnnnnn',
          password: 'password'
        }
      }
    ]
    return store.dispatch(loginAction()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
