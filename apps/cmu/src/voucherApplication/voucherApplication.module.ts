import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VoucherApplicationModuleBase } from "./base/voucherApplication.module.base";
import { VoucherApplicationService } from "./voucherApplication.service";
import { VoucherApplicationController } from "./voucherApplication.controller";
import { VoucherApplicationResolver } from "./voucherApplication.resolver";

@Module({
  imports: [VoucherApplicationModuleBase, forwardRef(() => AuthModule)],
  controllers: [VoucherApplicationController],
  providers: [VoucherApplicationService, VoucherApplicationResolver],
  exports: [VoucherApplicationService],
})
export class VoucherApplicationModule {}
