import { merge } from "lodash";

import { typeDef as Person, resolver as PersonResolver } from "./PersonSchema";

const DefaultSchema = `
    type Query {
        _empty: String
    }

    type Mutation {
        _empty: String
    }
`;

export const typeDefs = [DefaultSchema, Person];
export const resolvers = PersonResolver;
