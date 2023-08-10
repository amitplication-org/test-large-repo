import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RiskFactorResolverBase } from "./base/riskFactor.resolver.base";
import { RiskFactor } from "./base/RiskFactor";
import { RiskFactorService } from "./riskFactor.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RiskFactor)
export class RiskFactorResolver extends RiskFactorResolverBase {
  constructor(
    protected readonly service: RiskFactorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
