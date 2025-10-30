import { gql } from 'apollo-server-express';
export const visitorsTypeDefs = gql `
  type Visitors {
    id: ID!
    ip_address: String
    country: String
    city: String
    isp: String
    user_agent: String
    referrer: String
    accept_language: String
    screen_resolution: String
    device_type: String
    timestamp: String
    visit_time: String
    pages_visited: [String]
    session_duration: Int
  }
  type Query {
    visitors: [Visitors]
    visitor(id: ID!): Visitors
  }
  type Mutation {
    createVisitor(ip_address: String!, country: String!, city: String!, isp: String!, user_agent: String!, referrer: String!, accept_language: String!, screen_resolution: String!, device_type: String!, timestamp: String!, visit_time: String!, pages_visited: [String]!, session_duration: Int!): Visitors
    updateVisitor(id: ID!, ip_address: String, country: String, city: String, isp: String, user_agent: String, referrer: String, accept_language: String, screen_resolution: String, device_type: String, timestamp: String, visit_time: String, pages_visited: [String], session_duration: Int): Visitors
    deleteVisitor(id: ID!): Visitors
  }
`;
//# sourceMappingURL=visitors.typeDefs.js.map