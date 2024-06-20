"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conversation = void 0;
const graphql_1 = require("@nestjs/graphql");
const message_model_1 = require("../../message/models/message.model");
const user_model_1 = require("../../user/models/user.model");
let Conversation = class Conversation {
    constructor(user1, user2) {
        this.user1 = user1;
        this.user2 = user2;
    }
};
exports.Conversation = Conversation;
__decorate([
    (0, graphql_1.Field)((type) => graphql_1.ID),
    __metadata("design:type", String)
], Conversation.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Conversation.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)((type) => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], Conversation.prototype, "user1", void 0);
__decorate([
    (0, graphql_1.Field)((type) => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], Conversation.prototype, "user2", void 0);
__decorate([
    (0, graphql_1.Field)((type) => [message_model_1.Message]),
    __metadata("design:type", Array)
], Conversation.prototype, "messages", void 0);
exports.Conversation = Conversation = __decorate([
    (0, graphql_1.ObjectType)(),
    __metadata("design:paramtypes", [user_model_1.User, user_model_1.User])
], Conversation);
//# sourceMappingURL=conversation.model.js.map