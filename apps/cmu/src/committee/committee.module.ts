import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CommitteeModuleBase } from "./base/committee.module.base";
import { CommitteeService } from "./committee.service";
import { CommitteeController } from "./committee.controller";
import { CommitteeResolver } from "./committee.resolver";

@Module({
  imports: [CommitteeModuleBase, forwardRef(() => AuthModule)],
  controllers: [CommitteeController],
  providers: [CommitteeService, CommitteeResolver],
  exports: [CommitteeService],
})
export class CommitteeModule {}
