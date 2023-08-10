import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ToeflEssentialModuleBase } from "./base/toeflEssential.module.base";
import { ToeflEssentialService } from "./toeflEssential.service";
import { ToeflEssentialController } from "./toeflEssential.controller";
import { ToeflEssentialResolver } from "./toeflEssential.resolver";

@Module({
  imports: [ToeflEssentialModuleBase, forwardRef(() => AuthModule)],
  controllers: [ToeflEssentialController],
  providers: [ToeflEssentialService, ToeflEssentialResolver],
  exports: [ToeflEssentialService],
})
export class ToeflEssentialModule {}
