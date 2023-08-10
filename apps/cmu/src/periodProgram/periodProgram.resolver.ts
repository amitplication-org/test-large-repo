import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PeriodProgramResolverBase } from "./base/periodProgram.resolver.base";
import { PeriodProgram } from "./base/PeriodProgram";
import { PeriodProgramService } from "./periodProgram.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PeriodProgram)
export class PeriodProgramResolver extends PeriodProgramResolverBase {
  constructor(
    protected readonly service: PeriodProgramService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
