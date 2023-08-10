import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DuolingoDatumModuleBase } from "./base/duolingoDatum.module.base";
import { DuolingoDatumService } from "./duolingoDatum.service";
import { DuolingoDatumController } from "./duolingoDatum.controller";
import { DuolingoDatumResolver } from "./duolingoDatum.resolver";

@Module({
  imports: [DuolingoDatumModuleBase, forwardRef(() => AuthModule)],
  controllers: [DuolingoDatumController],
  providers: [DuolingoDatumService, DuolingoDatumResolver],
  exports: [DuolingoDatumService],
})
export class DuolingoDatumModule {}
