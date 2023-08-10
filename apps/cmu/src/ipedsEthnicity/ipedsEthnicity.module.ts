import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { IpedsEthnicityModuleBase } from "./base/ipedsEthnicity.module.base";
import { IpedsEthnicityService } from "./ipedsEthnicity.service";
import { IpedsEthnicityController } from "./ipedsEthnicity.controller";
import { IpedsEthnicityResolver } from "./ipedsEthnicity.resolver";

@Module({
  imports: [IpedsEthnicityModuleBase, forwardRef(() => AuthModule)],
  controllers: [IpedsEthnicityController],
  providers: [IpedsEthnicityService, IpedsEthnicityResolver],
  exports: [IpedsEthnicityService],
})
export class IpedsEthnicityModule {}
