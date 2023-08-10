import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GroupRankCommentResolverBase } from "./base/groupRankComment.resolver.base";
import { GroupRankComment } from "./base/GroupRankComment";
import { GroupRankCommentService } from "./groupRankComment.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GroupRankComment)
export class GroupRankCommentResolver extends GroupRankCommentResolverBase {
  constructor(
    protected readonly service: GroupRankCommentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
