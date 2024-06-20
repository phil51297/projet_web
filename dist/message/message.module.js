"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageModule = void 0;
const common_1 = require("@nestjs/common");
const bull_1 = require("@nestjs/bull");
const message_resolver_1 = require("./message.resolver");
const message_service_1 = require("./message.service");
const message_processor_1 = require("./message.processor");
const conversation_module_1 = require("../conversation/conversation.module");
const user_module_1 = require("../user/user.module");
let MessageModule = class MessageModule {
};
exports.MessageModule = MessageModule;
exports.MessageModule = MessageModule = __decorate([
    (0, common_1.Module)({
        imports: [
            bull_1.BullModule.registerQueue({
                name: 'messageQueue',
            }),
            conversation_module_1.ConversationModule,
            user_module_1.UserModule,
        ],
        providers: [message_resolver_1.MessageResolver, message_service_1.MessageService, message_processor_1.MessageProcessor],
    })
], MessageModule);
//# sourceMappingURL=message.module.js.map