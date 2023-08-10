import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DomainUnitService } from "./domainUnit.service";
import { DomainUnitControllerBase } from "./base/domainUnit.controller.base";

@swagger.ApiTags("domainUnits")
@common.Controller("domainUnits")
export class DomainUnitController extends DomainUnitControllerBase {
  constructor(
    protected readonly service: DomainUnitService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
