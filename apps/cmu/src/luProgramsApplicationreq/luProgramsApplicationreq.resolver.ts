import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LuProgramsApplicationreqResolverBase } from "./base/luProgramsApplicationreq.resolver.base";
import { LuProgramsApplicationreq } from "./base/LuProgramsApplicationreq";
import { LuProgramsApplicationreqService } from "./luProgramsApplicationreq.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LuProgramsApplicationreq)
export class LuProgramsApplicationreqResolver extends LuProgramsApplicationreqResolverBase {
  constructor(
    protected readonly service: LuProgramsApplicationreqService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
