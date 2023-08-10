import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RiskFactorService } from "./riskFactor.service";
import { RiskFactorControllerBase } from "./base/riskFactor.controller.base";

@swagger.ApiTags("riskFactors")
@common.Controller("riskFactors")
export class RiskFactorController extends RiskFactorControllerBase {
  constructor(
    protected readonly service: RiskFactorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
