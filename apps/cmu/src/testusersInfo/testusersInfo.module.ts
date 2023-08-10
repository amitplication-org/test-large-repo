import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TestusersInfoModuleBase } from "./base/testusersInfo.module.base";
import { TestusersInfoService } from "./testusersInfo.service";
import { TestusersInfoController } from "./testusersInfo.controller";
import { TestusersInfoResolver } from "./testusersInfo.resolver";

@Module({
  imports: [TestusersInfoModuleBase, forwardRef(() => AuthModule)],
  controllers: [TestusersInfoController],
  providers: [TestusersInfoService, TestusersInfoResolver],
  exports: [TestusersInfoService],
})
export class TestusersInfoModule {}
