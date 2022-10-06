import { gql } from '@apollo/client';

export const report1 = gql`
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
