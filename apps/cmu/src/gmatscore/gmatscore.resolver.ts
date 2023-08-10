import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GmatscoreResolverBase } from "./base/gmatscore.resolver.base";
import { Gmatscore } from "./base/Gmatscore";
import { GmatscoreService } from "./gmatscore.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Gmatscore)
export class GmatscoreResolver extends GmatscoreResolverBase {
  constructor(
    protected readonly service: GmatscoreService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
