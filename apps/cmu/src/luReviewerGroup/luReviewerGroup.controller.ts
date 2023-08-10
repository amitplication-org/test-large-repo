import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LuReviewerGroupService } from "./luReviewerGroup.service";
import { LuReviewerGroupControllerBase } from "./base/luReviewerGroup.controller.base";

@swagger.ApiTags("luReviewerGroups")
@common.Controller("luReviewerGroups")
export class LuReviewerGroupController extends LuReviewerGroupControllerBase {
  constructor(
    protected readonly service: LuReviewerGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
