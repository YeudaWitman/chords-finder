import React from 'react';
import { shallow } from 'enzyme';

import ChordTitle from './ChordTitle';

const fakeItem = {
  name: 'A',
  fret: 1,
  base: 2,
  opens: [6],
  off: [1],
  fingers: [[null],[0], [3,4,5], [0], [0], [0], [0]]
};

describe('ChordTitle component is working as expected', () => {
  it('Checks if contains "A" as name', () => {
    let element = shallow(<ChordTitle chord={fakeItem} />);
    expect(element).toHaveLength(1);
    expect(element.exists()).toBeTruthy();
    expect(element.text()).toMatch(fakeItem.name);
  });
});