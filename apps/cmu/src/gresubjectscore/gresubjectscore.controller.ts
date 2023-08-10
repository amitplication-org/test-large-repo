import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GresubjectscoreService } from "./gresubjectscore.service";
import { GresubjectscoreControllerBase } from "./base/gresubjectscore.controller.base";

@swagger.ApiTags("gresubjectscores")
@common.Controller("gresubjectscores")
export class GresubjectscoreController extends GresubjectscoreControllerBase {
  constructor(
    protected readonly service: GresubjectscoreService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
