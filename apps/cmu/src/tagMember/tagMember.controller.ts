import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TagMemberService } from "./tagMember.service";
import { TagMemberControllerBase } from "./base/tagMember.controller.base";

@swagger.ApiTags("tagMembers")
@common.Controller("tagMembers")
export class TagMemberController extends TagMemberControllerBase {
  constructor(
    protected readonly service: TagMemberService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
