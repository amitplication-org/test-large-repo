import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SlateMaterialResolverBase } from "./base/slateMaterial.resolver.base";
import { SlateMaterial } from "./base/SlateMaterial";
import { SlateMaterialService } from "./slateMaterial.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SlateMaterial)
export class SlateMaterialResolver extends SlateMaterialResolverBase {
  constructor(
    protected readonly service: SlateMaterialService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
