import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RissMcnairService } from "./rissMcnair.service";
import { RissMcnairControllerBase } from "./base/rissMcnair.controller.base";

@swagger.ApiTags("rissMcnairs")
@common.Controller("rissMcnairs")
export class RissMcnairController extends RissMcnairControllerBase {
  constructor(
    protected readonly service: RissMcnairService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
