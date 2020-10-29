import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

//REDUX
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';

const store = createStore(rootReducer);

describe('App component is working as expected', () => {

  it('fake test', () => {
      const wrapper = shallow(<Provider store={store}><App /></Provider>);
      expect(wrapper.find(App).exists()).toBeTruthy();
  });
});
