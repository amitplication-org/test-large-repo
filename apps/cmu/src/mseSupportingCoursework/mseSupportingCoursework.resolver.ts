import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MseSupportingCourseworkResolverBase } from "./base/mseSupportingCoursework.resolver.base";
import { MseSupportingCoursework } from "./base/MseSupportingCoursework";
import { MseSupportingCourseworkService } from "./mseSupportingCoursework.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MseSupportingCoursework)
export class MseSupportingCourseworkResolver extends MseSupportingCourseworkResolverBase {
  constructor(
    protected readonly service: MseSupportingCourseworkService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
