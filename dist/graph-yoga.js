"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_yoga_1 = require("graphql-yoga");
const db = require("./db");
class GraphYoga {
    constructor() {
        this.typeDefs = [
            `
        type Query {
            person_name(name: String): Person
            persons_gender(gender: String): [Person]
            persons: [Person]
        }
        type Person {
            name: String!
            age: Int!
            gender: String!
        }
        `
        ];
        this.resolvers = {
            Query: {
                persons_gender: (_, { gender }) => {
                    return db.default.persons.filter(e => {
                        return e.gender === gender;
                    });
                },
                person_name: (_, { name }) => {
                    return db.default.persons.find(e => {
                        return e.name === name;
                    });
                },
                persons: () => {
                    return db.default.persons;
                }
            }
        };
        this.server = new graphql_yoga_1.GraphQLServer({
            typeDefs: this.typeDefs,
            resolvers: this.resolvers
        });
    }
}
exports.default = new GraphYoga().server;
//# sourceMappingURL=graph-yoga.js.map