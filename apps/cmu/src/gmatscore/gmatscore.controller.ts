import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GmatscoreService } from "./gmatscore.service";
import { GmatscoreControllerBase } from "./base/gmatscore.controller.base";

@swagger.ApiTags("gmatscores")
@common.Controller("gmatscores")
export class GmatscoreController extends GmatscoreControllerBase {
  constructor(
    protected readonly service: GmatscoreService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
