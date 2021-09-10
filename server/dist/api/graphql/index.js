"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMutations = exports.UserQueries = exports.User = void 0;
var nexus_1 = require("nexus");
exports.User = (0, nexus_1.objectType)({
    name: 'User',
    definition: function (t) {
        t.model.id(), t.model.name(), t.model.email();
    },
});
exports.UserQueries = (0, nexus_1.extendType)({
    type: 'Query',
    definition: function (t) {
        t.crud.user(),
            t.crud.users({
                filtering: true,
            });
    },
});
exports.UserMutations = (0, nexus_1.extendType)({
    type: 'Mutation',
    definition: function (t) {
        t.crud.createOneUser(), t.crud.deleteOneUser();
    },
});
//# sourceMappingURL=index.js.map