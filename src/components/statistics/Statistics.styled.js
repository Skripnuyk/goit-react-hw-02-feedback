import styled from 'styled-components';

export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  :not(:last-child) {
    padding-bottom: 10px;
  }
`;