import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ParentInfoModuleBase } from "./base/parentInfo.module.base";
import { ParentInfoService } from "./parentInfo.service";
import { ParentInfoController } from "./parentInfo.controller";
import { ParentInfoResolver } from "./parentInfo.resolver";

@Module({
  imports: [ParentInfoModuleBase, forwardRef(() => AuthModule)],
  controllers: [ParentInfoController],
  providers: [ParentInfoService, ParentInfoResolver],
  exports: [ParentInfoService],
})
export class ParentInfoModule {}
