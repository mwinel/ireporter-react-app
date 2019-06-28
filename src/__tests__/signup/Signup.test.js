import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import fetchMock from 'fetch-mock'
import signUpReducer from '../../redux/reducers/signUpReducer';
import signUpAction from '../../redux/actions/signUpAction';
import { SignUp } from '../../components/SignUp';
import { signupTypes } from '../../redux/types';

const storeItems = {};
const middlewares = [thunk]
const mockStore = configureStore(middlewares);
const store = mockStore(storeItems);

const initialState = {};

const props = {
  firstname: '',
  lastname: '',
  othernames: '',
  username: '',
  email: '',
  password: '',
  phone_number: '',
  onChange: jest.fn(),
  onSubmit: jest.fn(),
  signUp: jest.fn(),
  preventDefault: jest.fn()
}

const mockEvent = {
  preventDefault: jest.fn()
}

describe('SignUp Component', () => {
  let SignUpComponent = shallow(<SignUp {...props} store={store}/>)
  it('Should match snapshot', () => {
    SignUpComponent.instance().onSubmit(mockEvent);
    expect(toJson(SignUpComponent)).toMatchSnapshot();
  });

  it('should trigger onChange on signup', () => {
    const signup = { 
      firstname: 'hahahahahha',
      lastname: 'ahahahahahhaha',
      othernames: 'aahahahahhahaha',
      username: 'mwinelnnnnn',
      email: 'kisuulejames1@gmail.com',
      password: 'password',
      phone_number: '123456',
    }
    const evt = {
      preventDefault: jest.fn(),
      target: signup
    }
    expect(SignUpComponent.instance().onChange(evt));
  });
});

describe("signup success", () => {
  it('tests signup success', () => {
    const newState = signUpReducer(initialState,
      { type: signupTypes.SIGNUP_SUCCESS });
    expect(newState).toEqual({});
  });
});

describe("signup action", () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it("creates SIGNUP_SUCCESS when creating user", () => {
    fetchMock.post('*', {
      body: {
        firstname: 'hahahahahha',
        lastname: 'ahahahahahhaha',
        othernames: 'aahahahahhahaha',
        username: 'mwinelnnnnn',
        email: 'kisuulejames1@gmail.com',
        password: 'password',
        phone_number: '123456',
      },
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
      { type: signupTypes.SIGNUP_SUCCESS, 
        payload: {
          firstname: 'hahahahahha',
          lastname: 'ahahahahahhaha',
          othernames: 'aahahahahhahaha',
          username: 'mwinelnnnnn',
          email: 'kisuulejames1@gmail.com',
          password: 'password',
          phone_number: '123456',
        }
      }
    ]
    return store.dispatch(signUpAction()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
