import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { report1 } from '../data/warcraftlogsQueries.js';

const ActiveRaiders = () => {
  const { data, loading, error } = useQuery(report1);
  if (loading) return 'Loading...';
  if (error) return <pre>{error.message}</pre>;
  console.log('hola');
  console.log(data.reportData.report.masterData.actors);

  return (
    <div>
      <div>Report:</div>
      <div>{data.reportData.report.code}</div>
      <div>Attendance:</div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Class</th>
          </tr>
        </thead>
        <tbody>
          {data.reportData.report.masterData.actors.map((person) => (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.subType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActiveRaiders;
