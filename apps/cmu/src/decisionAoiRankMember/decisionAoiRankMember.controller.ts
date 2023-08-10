import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DecisionAoiRankMemberService } from "./decisionAoiRankMember.service";
import { DecisionAoiRankMemberControllerBase } from "./base/decisionAoiRankMember.controller.base";

@swagger.ApiTags("decisionAoiRankMembers")
@common.Controller("decisionAoiRankMembers")
export class DecisionAoiRankMemberController extends DecisionAoiRankMemberControllerBase {
  constructor(
    protected readonly service: DecisionAoiRankMemberService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
