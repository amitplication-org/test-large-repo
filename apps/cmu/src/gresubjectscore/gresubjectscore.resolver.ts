import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GresubjectscoreResolverBase } from "./base/gresubjectscore.resolver.base";
import { Gresubjectscore } from "./base/Gresubjectscore";
import { GresubjectscoreService } from "./gresubjectscore.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Gresubjectscore)
export class GresubjectscoreResolver extends GresubjectscoreResolverBase {
  constructor(
    protected readonly service: GresubjectscoreService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
