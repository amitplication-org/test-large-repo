import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VoucherProgramModuleBase } from "./base/voucherProgram.module.base";
import { VoucherProgramService } from "./voucherProgram.service";
import { VoucherProgramController } from "./voucherProgram.controller";
import { VoucherProgramResolver } from "./voucherProgram.resolver";

@Module({
  imports: [VoucherProgramModuleBase, forwardRef(() => AuthModule)],
  controllers: [VoucherProgramController],
  providers: [VoucherProgramService, VoucherProgramResolver],
  exports: [VoucherProgramService],
})
export class VoucherProgramModule {}
