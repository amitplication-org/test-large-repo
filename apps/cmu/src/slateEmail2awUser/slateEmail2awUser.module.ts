import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SlateEmail2awUserModuleBase } from "./base/slateEmail2awUser.module.base";
import { SlateEmail2awUserService } from "./slateEmail2awUser.service";
import { SlateEmail2awUserController } from "./slateEmail2awUser.controller";
import { SlateEmail2awUserResolver } from "./slateEmail2awUser.resolver";

@Module({
  imports: [SlateEmail2awUserModuleBase, forwardRef(() => AuthModule)],
  controllers: [SlateEmail2awUserController],
  providers: [SlateEmail2awUserService, SlateEmail2awUserResolver],
  exports: [SlateEmail2awUserService],
})
export class SlateEmail2awUserModule {}
