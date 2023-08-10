import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VoucherTypeModuleBase } from "./base/voucherType.module.base";
import { VoucherTypeService } from "./voucherType.service";
import { VoucherTypeController } from "./voucherType.controller";
import { VoucherTypeResolver } from "./voucherType.resolver";

@Module({
  imports: [VoucherTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [VoucherTypeController],
  providers: [VoucherTypeService, VoucherTypeResolver],
  exports: [VoucherTypeService],
})
export class VoucherTypeModule {}
