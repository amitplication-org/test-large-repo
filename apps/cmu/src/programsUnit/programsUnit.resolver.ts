import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ProgramsUnitResolverBase } from "./base/programsUnit.resolver.base";
import { ProgramsUnit } from "./base/ProgramsUnit";
import { ProgramsUnitService } from "./programsUnit.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ProgramsUnit)
export class ProgramsUnitResolver extends ProgramsUnitResolverBase {
  constructor(
    protected readonly service: ProgramsUnitService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
