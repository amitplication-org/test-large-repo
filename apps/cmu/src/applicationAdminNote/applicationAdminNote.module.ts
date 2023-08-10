import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ApplicationAdminNoteModuleBase } from "./base/applicationAdminNote.module.base";
import { ApplicationAdminNoteService } from "./applicationAdminNote.service";
import { ApplicationAdminNoteController } from "./applicationAdminNote.controller";
import { ApplicationAdminNoteResolver } from "./applicationAdminNote.resolver";

@Module({
  imports: [ApplicationAdminNoteModuleBase, forwardRef(() => AuthModule)],
  controllers: [ApplicationAdminNoteController],
  providers: [ApplicationAdminNoteService, ApplicationAdminNoteResolver],
  exports: [ApplicationAdminNoteService],
})
export class ApplicationAdminNoteModule {}
