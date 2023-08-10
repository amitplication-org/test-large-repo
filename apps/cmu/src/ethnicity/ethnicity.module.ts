import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EthnicityModuleBase } from "./base/ethnicity.module.base";
import { EthnicityService } from "./ethnicity.service";
import { EthnicityController } from "./ethnicity.controller";
import { EthnicityResolver } from "./ethnicity.resolver";

@Module({
  imports: [EthnicityModuleBase, forwardRef(() => AuthModule)],
  controllers: [EthnicityController],
  providers: [EthnicityService, EthnicityResolver],
  exports: [EthnicityService],
})
export class EthnicityModule {}
