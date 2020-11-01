import React from 'react';
import { shallow } from 'enzyme';

import FingerSign from './FingerSign';

//REDUX
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../../redux/reducers';

const store = createStore(rootReducer);

describe('FingerSign component is working as expected', () => {
  it('Checks if contains "A" as name', () => {
    let element = shallow(<Provider store={store}><FingerSign fretIndex={0} strIndex={0} /></Provider>);

    expect(element).toHaveLength(1);
    expect(element.exists()).toBeTruthy();
    console.log(element.dive().props());
  });
});