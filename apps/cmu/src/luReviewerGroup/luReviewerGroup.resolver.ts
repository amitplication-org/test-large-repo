import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LuReviewerGroupResolverBase } from "./base/luReviewerGroup.resolver.base";
import { LuReviewerGroup } from "./base/LuReviewerGroup";
import { LuReviewerGroupService } from "./luReviewerGroup.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LuReviewerGroup)
export class LuReviewerGroupResolver extends LuReviewerGroupResolverBase {
  constructor(
    protected readonly service: LuReviewerGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
