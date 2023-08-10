import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HighschoolService } from "./highschool.service";
import { HighschoolControllerBase } from "./base/highschool.controller.base";

@swagger.ApiTags("highschools")
@common.Controller("highschools")
export class HighschoolController extends HighschoolControllerBase {
  constructor(
    protected readonly service: HighschoolService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
