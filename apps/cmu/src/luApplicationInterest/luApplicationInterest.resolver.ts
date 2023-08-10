import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LuApplicationInterestResolverBase } from "./base/luApplicationInterest.resolver.base";
import { LuApplicationInterest } from "./base/LuApplicationInterest";
import { LuApplicationInterestService } from "./luApplicationInterest.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LuApplicationInterest)
export class LuApplicationInterestResolver extends LuApplicationInterestResolverBase {
  constructor(
    protected readonly service: LuApplicationInterestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
