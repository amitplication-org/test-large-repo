import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RissMcnairModuleBase } from "./base/rissMcnair.module.base";
import { RissMcnairService } from "./rissMcnair.service";
import { RissMcnairController } from "./rissMcnair.controller";
import { RissMcnairResolver } from "./rissMcnair.resolver";

@Module({
  imports: [RissMcnairModuleBase, forwardRef(() => AuthModule)],
  controllers: [RissMcnairController],
  providers: [RissMcnairService, RissMcnairResolver],
  exports: [RissMcnairService],
})
export class RissMcnairModule {}
