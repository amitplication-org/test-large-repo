import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DietrichDiversityService } from "./dietrichDiversity.service";
import { DietrichDiversityControllerBase } from "./base/dietrichDiversity.controller.base";

@swagger.ApiTags("dietrichDiversities")
@common.Controller("dietrichDiversities")
export class DietrichDiversityController extends DietrichDiversityControllerBase {
  constructor(
    protected readonly service: DietrichDiversityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
