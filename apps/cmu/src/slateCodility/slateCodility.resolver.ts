import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SlateCodilityResolverBase } from "./base/slateCodility.resolver.base";
import { SlateCodility } from "./base/SlateCodility";
import { SlateCodilityService } from "./slateCodility.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SlateCodility)
export class SlateCodilityResolver extends SlateCodilityResolverBase {
  constructor(
    protected readonly service: SlateCodilityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
