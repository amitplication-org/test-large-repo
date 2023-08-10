import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MhciPrereqsConversationCommentModuleBase } from "./base/mhciPrereqsConversationComment.module.base";
import { MhciPrereqsConversationCommentService } from "./mhciPrereqsConversationComment.service";
import { MhciPrereqsConversationCommentController } from "./mhciPrereqsConversationComment.controller";
import { MhciPrereqsConversationCommentResolver } from "./mhciPrereqsConversationComment.resolver";

@Module({
  imports: [
    MhciPrereqsConversationCommentModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [MhciPrereqsConversationCommentController],
  providers: [
    MhciPrereqsConversationCommentService,
    MhciPrereqsConversationCommentResolver,
  ],
  exports: [MhciPrereqsConversationCommentService],
})
export class MhciPrereqsConversationCommentModule {}
