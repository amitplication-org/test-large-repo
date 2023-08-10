import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProgramTypeService } from "./programType.service";
import { ProgramTypeControllerBase } from "./base/programType.controller.base";

@swagger.ApiTags("programTypes")
@common.Controller("programTypes")
export class ProgramTypeController extends ProgramTypeControllerBase {
  constructor(
    protected readonly service: ProgramTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
