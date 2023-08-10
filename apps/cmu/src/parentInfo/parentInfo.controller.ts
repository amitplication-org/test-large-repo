import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ParentInfoService } from "./parentInfo.service";
import { ParentInfoControllerBase } from "./base/parentInfo.controller.base";

@swagger.ApiTags("parentInfos")
@common.Controller("parentInfos")
export class ParentInfoController extends ParentInfoControllerBase {
  constructor(
    protected readonly service: ParentInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
