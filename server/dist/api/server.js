"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var apollo_server_core_1 = require("apollo-server-core");
var context_1 = require("./context");
var nexus_schema_1 = require("./nexus.schema");
var server = new apollo_server_1.ApolloServer({
    schema: nexus_schema_1.schema,
    context: context_1.context,
    plugins: [(0, apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground)()],
});
exports.default = server;
//# sourceMappingURL=server.js.map