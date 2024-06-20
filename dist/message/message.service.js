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
exports.MessageService = void 0;
const common_1 = require("@nestjs/common");
const conversation_service_1 = require("../conversation/conversation.service");
const bull_1 = require("@nestjs/bull");
let MessageService = class MessageService {
    constructor(conversationService, messageQueue) {
        this.conversationService = conversationService;
        this.messageQueue = messageQueue;
    }
    async sendMessage(conversationId, user, text) {
        const messageData = {
            conversationId,
            user,
            text,
            creationDate: new Date(),
        };
        await this.messageQueue.add('sendMessage', messageData);
        return messageData;
    }
    findMessagesByConversation(conversationId) {
        const conversation = this.conversationService.findOneById(conversationId);
        return conversation.messages;
    }
};
exports.MessageService = MessageService;
exports.MessageService = MessageService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, bull_1.InjectQueue)('messageQueue')),
    __metadata("design:paramtypes", [conversation_service_1.ConversationService, Object])
], MessageService);
//# sourceMappingURL=message.service.js.map