import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ReviewIniAdminModuleBase } from "./base/reviewIniAdmin.module.base";
import { ReviewIniAdminService } from "./reviewIniAdmin.service";
import { ReviewIniAdminController } from "./reviewIniAdmin.controller";
import { ReviewIniAdminResolver } from "./reviewIniAdmin.resolver";

@Module({
  imports: [ReviewIniAdminModuleBase, forwardRef(() => AuthModule)],
  controllers: [ReviewIniAdminController],
  providers: [ReviewIniAdminService, ReviewIniAdminResolver],
  exports: [ReviewIniAdminService],
})
export class ReviewIniAdminModule {}
