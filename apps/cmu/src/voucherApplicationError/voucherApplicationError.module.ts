import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VoucherApplicationErrorModuleBase } from "./base/voucherApplicationError.module.base";
import { VoucherApplicationErrorService } from "./voucherApplicationError.service";
import { VoucherApplicationErrorController } from "./voucherApplicationError.controller";
import { VoucherApplicationErrorResolver } from "./voucherApplicationError.resolver";

@Module({
  imports: [VoucherApplicationErrorModuleBase, forwardRef(() => AuthModule)],
  controllers: [VoucherApplicationErrorController],
  providers: [VoucherApplicationErrorService, VoucherApplicationErrorResolver],
  exports: [VoucherApplicationErrorService],
})
export class VoucherApplicationErrorModule {}
