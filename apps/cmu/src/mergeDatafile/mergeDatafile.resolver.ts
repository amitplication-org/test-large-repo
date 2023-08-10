import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MergeDatafileResolverBase } from "./base/mergeDatafile.resolver.base";
import { MergeDatafile } from "./base/MergeDatafile";
import { MergeDatafileService } from "./mergeDatafile.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MergeDatafile)
export class MergeDatafileResolver extends MergeDatafileResolverBase {
  constructor(
    protected readonly service: MergeDatafileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
