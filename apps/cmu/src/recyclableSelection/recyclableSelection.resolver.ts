import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RecyclableSelectionResolverBase } from "./base/recyclableSelection.resolver.base";
import { RecyclableSelection } from "./base/RecyclableSelection";
import { RecyclableSelectionService } from "./recyclableSelection.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RecyclableSelection)
export class RecyclableSelectionResolver extends RecyclableSelectionResolverBase {
  constructor(
    protected readonly service: RecyclableSelectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
