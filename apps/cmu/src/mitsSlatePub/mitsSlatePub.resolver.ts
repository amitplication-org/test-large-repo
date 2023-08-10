import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MitsSlatePubResolverBase } from "./base/mitsSlatePub.resolver.base";
import { MitsSlatePub } from "./base/MitsSlatePub";
import { MitsSlatePubService } from "./mitsSlatePub.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MitsSlatePub)
export class MitsSlatePubResolver extends MitsSlatePubResolverBase {
  constructor(
    protected readonly service: MitsSlatePubService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
