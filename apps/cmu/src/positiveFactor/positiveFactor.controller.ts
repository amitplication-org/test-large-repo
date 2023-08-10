import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PositiveFactorService } from "./positiveFactor.service";
import { PositiveFactorControllerBase } from "./base/positiveFactor.controller.base";

@swagger.ApiTags("positiveFactors")
@common.Controller("positiveFactors")
export class PositiveFactorController extends PositiveFactorControllerBase {
  constructor(
    protected readonly service: PositiveFactorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
