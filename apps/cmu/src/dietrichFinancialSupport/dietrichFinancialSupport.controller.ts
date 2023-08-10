import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DietrichFinancialSupportService } from "./dietrichFinancialSupport.service";
import { DietrichFinancialSupportControllerBase } from "./base/dietrichFinancialSupport.controller.base";

@swagger.ApiTags("dietrichFinancialSupports")
@common.Controller("dietrichFinancialSupports")
export class DietrichFinancialSupportController extends DietrichFinancialSupportControllerBase {
  constructor(
    protected readonly service: DietrichFinancialSupportService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
