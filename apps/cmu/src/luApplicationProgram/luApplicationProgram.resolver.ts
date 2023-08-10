import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LuApplicationProgramResolverBase } from "./base/luApplicationProgram.resolver.base";
import { LuApplicationProgram } from "./base/LuApplicationProgram";
import { LuApplicationProgramService } from "./luApplicationProgram.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LuApplicationProgram)
export class LuApplicationProgramResolver extends LuApplicationProgramResolverBase {
  constructor(
    protected readonly service: LuApplicationProgramService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
