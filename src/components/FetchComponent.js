import React from 'react';
import { useQuery } from '@apollo/client';
import Checkbox from '@mui/material/Checkbox';
import { codeReport } from '../data/warcraftlogsQueries';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const FetchComponent = ({ code }) => {
  const { data: data, loading: loading, error: error } = useQuery(code);

  const playerList = data
    ? data.reportData.report.masterData.actors.map(({ name }) => name)
    : [];

  return (
    <div>
      {' '}
      {playerList.includes('Tacomonde') ? (
        <Checkbox {...label} defaultChecked />
      ) : (
        <Checkbox {...label} />
      )}
    </div>
  );
};

export default FetchComponent;
