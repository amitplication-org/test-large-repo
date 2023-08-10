import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GroupRankMemberService } from "./groupRankMember.service";
import { GroupRankMemberControllerBase } from "./base/groupRankMember.controller.base";

@swagger.ApiTags("groupRankMembers")
@common.Controller("groupRankMembers")
export class GroupRankMemberController extends GroupRankMemberControllerBase {
  constructor(
    protected readonly service: GroupRankMemberService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
