import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { Em2SupportingCourseworkResolverBase } from "./base/em2SupportingCoursework.resolver.base";
import { Em2SupportingCoursework } from "./base/Em2SupportingCoursework";
import { Em2SupportingCourseworkService } from "./em2SupportingCoursework.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Em2SupportingCoursework)
export class Em2SupportingCourseworkResolver extends Em2SupportingCourseworkResolverBase {
  constructor(
    protected readonly service: Em2SupportingCourseworkService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
