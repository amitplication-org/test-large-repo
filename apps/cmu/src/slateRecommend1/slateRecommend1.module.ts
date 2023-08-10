import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SlateRecommend1ModuleBase } from "./base/slateRecommend1.module.base";
import { SlateRecommend1Service } from "./slateRecommend1.service";
import { SlateRecommend1Controller } from "./slateRecommend1.controller";
import { SlateRecommend1Resolver } from "./slateRecommend1.resolver";

@Module({
  imports: [SlateRecommend1ModuleBase, forwardRef(() => AuthModule)],
  controllers: [SlateRecommend1Controller],
  providers: [SlateRecommend1Service, SlateRecommend1Resolver],
  exports: [SlateRecommend1Service],
})
export class SlateRecommend1Module {}
