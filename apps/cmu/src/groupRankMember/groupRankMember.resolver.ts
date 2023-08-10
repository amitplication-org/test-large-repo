import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GroupRankMemberResolverBase } from "./base/groupRankMember.resolver.base";
import { GroupRankMember } from "./base/GroupRankMember";
import { GroupRankMemberService } from "./groupRankMember.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GroupRankMember)
export class GroupRankMemberResolver extends GroupRankMemberResolverBase {
  constructor(
    protected readonly service: GroupRankMemberService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
