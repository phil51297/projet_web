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
exports.MessageProcessor = void 0;
const bull_1 = require("@nestjs/bull");
const conversation_service_1 = require("../conversation/conversation.service");
let MessageProcessor = class MessageProcessor {
    constructor(conversationService) {
        this.conversationService = conversationService;
    }
    async handleSendMessage(job) {
        const { conversationId, user, text, creationDate } = job.data;
        const conversation = this.conversationService.findOneById(conversationId);
        const newMessage = {
            id: Date.now(),
            user,
            text,
            creationDate,
        };
        conversation.messages.push(newMessage);
        return newMessage;
    }
};
exports.MessageProcessor = MessageProcessor;
__decorate([
    (0, bull_1.Process)('sendMessage'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MessageProcessor.prototype, "handleSendMessage", null);
exports.MessageProcessor = MessageProcessor = __decorate([
    (0, bull_1.Processor)('messageQueue'),
    __metadata("design:paramtypes", [conversation_service_1.ConversationService])
], MessageProcessor);
//# sourceMappingURL=message.processor.js.map