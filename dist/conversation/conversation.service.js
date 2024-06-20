"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationService = void 0;
const common_1 = require("@nestjs/common");
let ConversationService = class ConversationService {
    constructor() {
        this.conversations = [];
    }
    findAll() {
        return this.conversations;
    }
    findOneById(id) {
        return this.conversations.find((conversation) => conversation.id === id);
    }
    findByUser(userId) {
        return this.conversations.filter((conversation) => conversation.user1.id === userId || conversation.user2.id === userId);
    }
    create(user1, user2) {
        const newConversation = {
            id: Date.now().toString(),
            name: `${user1.username}-${user2.username}`,
            user1,
            user2,
            messages: [],
        };
        this.conversations.push(newConversation);
        return newConversation;
    }
};
exports.ConversationService = ConversationService;
exports.ConversationService = ConversationService = __decorate([
    (0, common_1.Injectable)()
], ConversationService);
//# sourceMappingURL=conversation.service.js.map