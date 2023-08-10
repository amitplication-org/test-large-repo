import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DecisionRankMemberService } from "./decisionRankMember.service";
import { DecisionRankMemberControllerBase } from "./base/decisionRankMember.controller.base";

@swagger.ApiTags("decisionRankMembers")
@common.Controller("decisionRankMembers")
export class DecisionRankMemberController extends DecisionRankMemberControllerBase {
  constructor(
    protected readonly service: DecisionRankMemberService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
