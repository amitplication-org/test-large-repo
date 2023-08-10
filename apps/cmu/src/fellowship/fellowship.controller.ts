import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FellowshipService } from "./fellowship.service";
import { FellowshipControllerBase } from "./base/fellowship.controller.base";

@swagger.ApiTags("fellowships")
@common.Controller("fellowships")
export class FellowshipController extends FellowshipControllerBase {
  constructor(
    protected readonly service: FellowshipService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
