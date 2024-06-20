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
exports.MessageResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const message_service_1 = require("./message.service");
const message_model_1 = require("./models/message.model");
const user_service_1 = require("../user/user.service");
let MessageResolver = class MessageResolver {
    constructor(messageService, userService) {
        this.messageService = messageService;
        this.userService = userService;
    }
    messagesByConversation(conversationId) {
        return this.messageService.findMessagesByConversation(conversationId);
    }
    async sendMessage(conversationId, userId, text) {
        const user = this.userService.findOneById(userId);
        return await this.messageService.sendMessage(conversationId, user, text);
    }
};
exports.MessageResolver = MessageResolver;
__decorate([
    (0, graphql_1.Query)(returns => [message_model_1.Message]),
    __param(0, (0, graphql_1.Args)('conversationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MessageResolver.prototype, "messagesByConversation", null);
__decorate([
    (0, graphql_1.Mutation)(returns => message_model_1.Message),
    __param(0, (0, graphql_1.Args)('conversationId')),
    __param(1, (0, graphql_1.Args)('userId')),
    __param(2, (0, graphql_1.Args)('text')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", Promise)
], MessageResolver.prototype, "sendMessage", null);
exports.MessageResolver = MessageResolver = __decorate([
    (0, graphql_1.Resolver)(of => message_model_1.Message),
    __metadata("design:paramtypes", [message_service_1.MessageService,
        user_service_1.UserService])
], MessageResolver);
//# sourceMappingURL=message.resolver.js.map