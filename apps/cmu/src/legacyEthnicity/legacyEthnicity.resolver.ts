import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LegacyEthnicityResolverBase } from "./base/legacyEthnicity.resolver.base";
import { LegacyEthnicity } from "./base/LegacyEthnicity";
import { LegacyEthnicityService } from "./legacyEthnicity.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LegacyEthnicity)
export class LegacyEthnicityResolver extends LegacyEthnicityResolverBase {
  constructor(
    protected readonly service: LegacyEthnicityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
