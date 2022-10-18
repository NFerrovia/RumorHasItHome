import { gql } from '@apollo/client';

export const codeReport = gql`
  {
    reportData {
      reports(guildID: 140757, limit: 6) {
        data {
          code
        }
      }
    }
  }
`;

export const reportPlayers = gql`
  {
    reportData {
      report(code: "aQc1GLJFh4gyNvzr") {
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
          }
        }
      }
    }
  }
`;
