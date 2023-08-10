import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MergeApplicationResolverBase } from "./base/mergeApplication.resolver.base";
import { MergeApplication } from "./base/MergeApplication";
import { MergeApplicationService } from "./mergeApplication.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MergeApplication)
export class MergeApplicationResolver extends MergeApplicationResolverBase {
  constructor(
    protected readonly service: MergeApplicationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
