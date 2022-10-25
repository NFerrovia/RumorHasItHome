import React from 'react';
import { useQuery } from '@apollo/client';
import { codeReport } from '../data/warcraftlogsQueries.js';
import { gql } from '@apollo/client';
import '../css/ActiveRaiders.css';
import PlayerList from './PlayerList.js';

const ActiveRaiders = () => {
  const { data: data, loading: loading, error: error } = useQuery(codeReport);
  const codeListArray = data
    ? data.reportData.reports.data.map(({ code }) => code)
    : [];

  const querys = codeListArray?.map(
    (code) => gql`
    {
      reportData {
        report(code: "${code}") {
          code
          revision
          zone {
            id
            name
          }
          masterData(translate: false) {
            actors(type: "player") {
              name
              subType
              server
            }
          }
        }
      }
    }
    `
  );

  return <div>{querys.length === 6 && <PlayerList querys={querys} />}</div>;
};

export default ActiveRaiders;
