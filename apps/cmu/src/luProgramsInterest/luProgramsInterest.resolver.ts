import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LuProgramsInterestResolverBase } from "./base/luProgramsInterest.resolver.base";
import { LuProgramsInterest } from "./base/LuProgramsInterest";
import { LuProgramsInterestService } from "./luProgramsInterest.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LuProgramsInterest)
export class LuProgramsInterestResolver extends LuProgramsInterestResolverBase {
  constructor(
    protected readonly service: LuProgramsInterestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
