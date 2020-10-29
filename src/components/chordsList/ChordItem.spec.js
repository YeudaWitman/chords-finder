import React from 'react';
import { shallow } from 'enzyme';

import ChordItem from './ChordItem';

const fakeItem = {
  name: 'A',
  fret: 1,
  base: 2,
  opens: [6],
  off: [1],
  fingers: [[null],[0], [3,4,5], [0], [0], [0], [0]]
};



let element;

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => jest.fn(() => {
    const initChord = {
      name: ' ',
      fret: 1,
      base: 1,
      opens: [],
      off: [],
      fingers: [[null],[0], [0], [0], [0], [0], [0]]
    };
    return Promise.resolve(initChord)}
    ),
}));

describe('ChordItem component is working as expected', () => {
  
  beforeAll(() => {
    element = shallow(<ChordItem chord={fakeItem} />);
  });

  it('Checks if contains "A" as name', () => {
    // console.log('hh',element.debug());
    expect(element).toHaveLength(1);
    expect(element.text()).toMatch(fakeItem.name);
  });  

  it('Check what happend on select', () => {
    element.simulate('click');
    
  });
});