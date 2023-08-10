import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DomainUnitModuleBase } from "./base/domainUnit.module.base";
import { DomainUnitService } from "./domainUnit.service";
import { DomainUnitController } from "./domainUnit.controller";
import { DomainUnitResolver } from "./domainUnit.resolver";

@Module({
  imports: [DomainUnitModuleBase, forwardRef(() => AuthModule)],
  controllers: [DomainUnitController],
  providers: [DomainUnitService, DomainUnitResolver],
  exports: [DomainUnitService],
})
export class DomainUnitModule {}
