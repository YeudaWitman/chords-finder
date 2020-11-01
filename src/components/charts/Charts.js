import React from 'react';
import styled from 'styled-components';

const ChartTable = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 310px;
  max-width: 310px;
  border-collapse: collapse;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 700;
`;

const chartsList = ['E', 'A', 'D', 'G', 'B', 'E'];

const Charts = () => {
  const charts = chartsList.map((c, i) => <span key={i}>{c}</span>);
  return (
    <ChartTable>
      {charts}
    </ChartTable>
  )
}

export default Charts;
