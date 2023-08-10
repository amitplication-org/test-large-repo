import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FellowshipModuleBase } from "./base/fellowship.module.base";
import { FellowshipService } from "./fellowship.service";
import { FellowshipController } from "./fellowship.controller";
import { FellowshipResolver } from "./fellowship.resolver";

@Module({
  imports: [FellowshipModuleBase, forwardRef(() => AuthModule)],
  controllers: [FellowshipController],
  providers: [FellowshipService, FellowshipResolver],
  exports: [FellowshipService],
})
export class FellowshipModule {}
