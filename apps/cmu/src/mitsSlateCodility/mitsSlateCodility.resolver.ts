import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MitsSlateCodilityResolverBase } from "./base/mitsSlateCodility.resolver.base";
import { MitsSlateCodility } from "./base/MitsSlateCodility";
import { MitsSlateCodilityService } from "./mitsSlateCodility.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MitsSlateCodility)
export class MitsSlateCodilityResolver extends MitsSlateCodilityResolverBase {
  constructor(
    protected readonly service: MitsSlateCodilityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
