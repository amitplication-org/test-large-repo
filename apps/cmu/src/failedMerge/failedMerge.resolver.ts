import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FailedMergeResolverBase } from "./base/failedMerge.resolver.base";
import { FailedMerge } from "./base/FailedMerge";
import { FailedMergeService } from "./failedMerge.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FailedMerge)
export class FailedMergeResolver extends FailedMergeResolverBase {
  constructor(
    protected readonly service: FailedMergeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
