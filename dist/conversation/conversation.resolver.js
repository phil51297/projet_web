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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const conversation_service_1 = require("./conversation.service");
const user_service_1 = require("../user/user.service");
const conversation_model_1 = require("./models/conversation.model");
let ConversationResolver = class ConversationResolver {
    constructor(conversationService, userService) {
        this.conversationService = conversationService;
        this.userService = userService;
    }
    conversations() {
        return this.conversationService.findAll();
    }
    conversationsByUser(userId) {
        return this.conversationService.findByUser(userId);
    }
    createConversation(user1Id, user2Id) {
        const user1 = this.userService.findOneById(user1Id);
        const user2 = this.userService.findOneById(user2Id);
        return this.conversationService.create(user1, user2);
    }
};
exports.ConversationResolver = ConversationResolver;
__decorate([
    (0, graphql_1.Query)((returns) => [conversation_model_1.Conversation]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConversationResolver.prototype, "conversations", null);
__decorate([
    (0, graphql_1.Query)((returns) => [conversation_model_1.Conversation]),
    __param(0, (0, graphql_1.Args)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConversationResolver.prototype, "conversationsByUser", null);
__decorate([
    (0, graphql_1.Mutation)((returns) => conversation_model_1.Conversation),
    __param(0, (0, graphql_1.Args)('user1Id')),
    __param(1, (0, graphql_1.Args)('user2Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ConversationResolver.prototype, "createConversation", null);
exports.ConversationResolver = ConversationResolver = __decorate([
    (0, graphql_1.Resolver)((of) => conversation_model_1.Conversation),
    __metadata("design:paramtypes", [conversation_service_1.ConversationService,
        user_service_1.UserService])
], ConversationResolver);
//# sourceMappingURL=conversation.resolver.js.map