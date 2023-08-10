import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MseRiskFactorService } from "./mseRiskFactor.service";
import { MseRiskFactorControllerBase } from "./base/mseRiskFactor.controller.base";

@swagger.ApiTags("mseRiskFactors")
@common.Controller("mseRiskFactors")
export class MseRiskFactorController extends MseRiskFactorControllerBase {
  constructor(
    protected readonly service: MseRiskFactorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
