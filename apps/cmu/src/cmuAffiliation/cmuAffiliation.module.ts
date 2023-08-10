import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CmuAffiliationModuleBase } from "./base/cmuAffiliation.module.base";
import { CmuAffiliationService } from "./cmuAffiliation.service";
import { CmuAffiliationController } from "./cmuAffiliation.controller";
import { CmuAffiliationResolver } from "./cmuAffiliation.resolver";

@Module({
  imports: [CmuAffiliationModuleBase, forwardRef(() => AuthModule)],
  controllers: [CmuAffiliationController],
  providers: [CmuAffiliationService, CmuAffiliationResolver],
  exports: [CmuAffiliationService],
})
export class CmuAffiliationModule {}
