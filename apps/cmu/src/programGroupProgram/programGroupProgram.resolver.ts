import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ProgramGroupProgramResolverBase } from "./base/programGroupProgram.resolver.base";
import { ProgramGroupProgram } from "./base/ProgramGroupProgram";
import { ProgramGroupProgramService } from "./programGroupProgram.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ProgramGroupProgram)
export class ProgramGroupProgramResolver extends ProgramGroupProgramResolverBase {
  constructor(
    protected readonly service: ProgramGroupProgramService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
