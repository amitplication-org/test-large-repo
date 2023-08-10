import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EthnicityResolverBase } from "./base/ethnicity.resolver.base";
import { Ethnicity } from "./base/Ethnicity";
import { EthnicityService } from "./ethnicity.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Ethnicity)
export class EthnicityResolver extends EthnicityResolverBase {
  constructor(
    protected readonly service: EthnicityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
