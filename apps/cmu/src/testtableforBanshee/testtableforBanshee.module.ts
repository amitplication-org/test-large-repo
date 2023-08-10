import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TesttableforBansheeModuleBase } from "./base/testtableforBanshee.module.base";
import { TesttableforBansheeService } from "./testtableforBanshee.service";
import { TesttableforBansheeController } from "./testtableforBanshee.controller";
import { TesttableforBansheeResolver } from "./testtableforBanshee.resolver";

@Module({
  imports: [TesttableforBansheeModuleBase, forwardRef(() => AuthModule)],
  controllers: [TesttableforBansheeController],
  providers: [TesttableforBansheeService, TesttableforBansheeResolver],
  exports: [TesttableforBansheeService],
})
export class TesttableforBansheeModule {}
