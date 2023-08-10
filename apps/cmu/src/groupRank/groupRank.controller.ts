import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GroupRankService } from "./groupRank.service";
import { GroupRankControllerBase } from "./base/groupRank.controller.base";

@swagger.ApiTags("groupRanks")
@common.Controller("groupRanks")
export class GroupRankController extends GroupRankControllerBase {
  constructor(
    protected readonly service: GroupRankService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
