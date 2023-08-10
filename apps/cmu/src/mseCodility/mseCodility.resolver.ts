import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MseCodilityResolverBase } from "./base/mseCodility.resolver.base";
import { MseCodility } from "./base/MseCodility";
import { MseCodilityService } from "./mseCodility.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MseCodility)
export class MseCodilityResolver extends MseCodilityResolverBase {
  constructor(
    protected readonly service: MseCodilityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
