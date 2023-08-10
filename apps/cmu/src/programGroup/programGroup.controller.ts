import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProgramGroupService } from "./programGroup.service";
import { ProgramGroupControllerBase } from "./base/programGroup.controller.base";

@swagger.ApiTags("programGroups")
@common.Controller("programGroups")
export class ProgramGroupController extends ProgramGroupControllerBase {
  constructor(
    protected readonly service: ProgramGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
