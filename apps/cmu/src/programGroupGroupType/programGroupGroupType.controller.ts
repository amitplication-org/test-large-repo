import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProgramGroupGroupTypeService } from "./programGroupGroupType.service";
import { ProgramGroupGroupTypeControllerBase } from "./base/programGroupGroupType.controller.base";

@swagger.ApiTags("programGroupGroupTypes")
@common.Controller("programGroupGroupTypes")
export class ProgramGroupGroupTypeController extends ProgramGroupGroupTypeControllerBase {
  constructor(
    protected readonly service: ProgramGroupGroupTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
