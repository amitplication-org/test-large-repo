import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MseRiskFactorResolverBase } from "./base/mseRiskFactor.resolver.base";
import { MseRiskFactor } from "./base/MseRiskFactor";
import { MseRiskFactorService } from "./mseRiskFactor.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MseRiskFactor)
export class MseRiskFactorResolver extends MseRiskFactorResolverBase {
  constructor(
    protected readonly service: MseRiskFactorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
