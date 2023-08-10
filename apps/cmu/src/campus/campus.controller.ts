import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CampusService } from "./campus.service";
import { CampusControllerBase } from "./base/campus.controller.base";

@swagger.ApiTags("campuses")
@common.Controller("campuses")
export class CampusController extends CampusControllerBase {
  constructor(
    protected readonly service: CampusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
