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
