import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UnitPeriodResolverBase } from "./base/unitPeriod.resolver.base";
import { UnitPeriod } from "./base/UnitPeriod";
import { UnitPeriodService } from "./unitPeriod.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UnitPeriod)
export class UnitPeriodResolver extends UnitPeriodResolverBase {
  constructor(
    protected readonly service: UnitPeriodService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
