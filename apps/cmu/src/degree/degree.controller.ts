import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DegreeService } from "./degree.service";
import { DegreeControllerBase } from "./base/degree.controller.base";

@swagger.ApiTags("degrees")
@common.Controller("degrees")
export class DegreeController extends DegreeControllerBase {
  constructor(
    protected readonly service: DegreeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
