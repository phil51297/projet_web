"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const health_controller_1 = require("./health/health.controller");
const bull_1 = require("@nestjs/bull");
const app_consummer_1 = require("./app.consummer");
const config_1 = require("@nestjs/config");
const graphql_1 = require("@nestjs/graphql");
const health_resolver_1 = require("./health/health.resolver");
const apollo_1 = require("@nestjs/apollo");
const path_1 = require("path");
const user_module_1 = require("./user/user.module");
const conversation_module_1 = require("./conversation/conversation.module");
const message_module_1 = require("./message/message.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
            }),
            bull_1.BullModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    redis: {
                        host: configService.get('REDIS_HOST'),
                        port: configService.get('REDIS_PORT'),
                    },
                }),
                inject: [config_1.ConfigService],
            }),
            bull_1.BullModule.registerQueue({
                name: 'health-queue',
            }),
            user_module_1.UserModule,
            conversation_module_1.ConversationModule,
            message_module_1.MessageModule
        ],
        controllers: [app_controller_1.AppController, health_controller_1.HealthController],
        providers: [app_service_1.AppService, app_consummer_1.AppConsummer, health_resolver_1.HealthResolver],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map