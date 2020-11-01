import React from 'react';

import styled from 'styled-components';
import FingerSign from './fingerSign/FingerSign';

const StringCell = styled.span`
  position: relative;
  width: ${p => p.lastString ? '0' : '20%'};
  text-align: center;
  border-left: ${p => (6-p.strIndex)}px solid #727272;
  border-right: ${p => p.lastString ? 'none' : '2px solid #727272'};
`;

const String = (props) => {

  return (
    <StringCell {...props}>
      <FingerSign {...props} />
    </StringCell>
  )
}

export default String;