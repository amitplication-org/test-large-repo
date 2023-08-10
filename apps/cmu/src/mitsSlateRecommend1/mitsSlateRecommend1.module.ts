import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MitsSlateRecommend1ModuleBase } from "./base/mitsSlateRecommend1.module.base";
import { MitsSlateRecommend1Service } from "./mitsSlateRecommend1.service";
import { MitsSlateRecommend1Controller } from "./mitsSlateRecommend1.controller";
import { MitsSlateRecommend1Resolver } from "./mitsSlateRecommend1.resolver";

@Module({
  imports: [MitsSlateRecommend1ModuleBase, forwardRef(() => AuthModule)],
  controllers: [MitsSlateRecommend1Controller],
  providers: [MitsSlateRecommend1Service, MitsSlateRecommend1Resolver],
  exports: [MitsSlateRecommend1Service],
})
export class MitsSlateRecommend1Module {}
