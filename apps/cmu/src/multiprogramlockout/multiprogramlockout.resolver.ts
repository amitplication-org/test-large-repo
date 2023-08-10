import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MultiprogramlockoutResolverBase } from "./base/multiprogramlockout.resolver.base";
import { Multiprogramlockout } from "./base/Multiprogramlockout";
import { MultiprogramlockoutService } from "./multiprogramlockout.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Multiprogramlockout)
export class MultiprogramlockoutResolver extends MultiprogramlockoutResolverBase {
  constructor(
    protected readonly service: MultiprogramlockoutService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
