import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ProgramsApplicationreqResolverBase } from "./base/programsApplicationreq.resolver.base";
import { ProgramsApplicationreq } from "./base/ProgramsApplicationreq";
import { ProgramsApplicationreqService } from "./programsApplicationreq.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ProgramsApplicationreq)
export class ProgramsApplicationreqResolver extends ProgramsApplicationreqResolverBase {
  constructor(
    protected readonly service: ProgramsApplicationreqService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
