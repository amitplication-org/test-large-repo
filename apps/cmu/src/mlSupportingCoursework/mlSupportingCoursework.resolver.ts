import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MlSupportingCourseworkResolverBase } from "./base/mlSupportingCoursework.resolver.base";
import { MlSupportingCoursework } from "./base/MlSupportingCoursework";
import { MlSupportingCourseworkService } from "./mlSupportingCoursework.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MlSupportingCoursework)
export class MlSupportingCourseworkResolver extends MlSupportingCourseworkResolverBase {
  constructor(
    protected readonly service: MlSupportingCourseworkService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
