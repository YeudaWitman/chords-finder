import React from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import FingerSign from './FingerSign';

const TableData = styled.td`
  position: relative;
  width: 20%;
  height: 20%;
  text-align: center;
  border: 3px solid #a5a5a5;
  border-top: 5px solid #000;
  /* border-right: none; */
`;

const String = (props) => {
  
  return (
    <TableData>
      <FingerSign {...props} />
    </TableData>
  )
}

export default String;