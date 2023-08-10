import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IniFinancialSupportService } from "./iniFinancialSupport.service";
import { IniFinancialSupportControllerBase } from "./base/iniFinancialSupport.controller.base";

@swagger.ApiTags("iniFinancialSupports")
@common.Controller("iniFinancialSupports")
export class IniFinancialSupportController extends IniFinancialSupportControllerBase {
  constructor(
    protected readonly service: IniFinancialSupportService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
