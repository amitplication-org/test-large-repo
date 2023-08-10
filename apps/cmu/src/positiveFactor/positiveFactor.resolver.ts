import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PositiveFactorResolverBase } from "./base/positiveFactor.resolver.base";
import { PositiveFactor } from "./base/PositiveFactor";
import { PositiveFactorService } from "./positiveFactor.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PositiveFactor)
export class PositiveFactorResolver extends PositiveFactorResolverBase {
  constructor(
    protected readonly service: PositiveFactorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
