import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SemPreviousCourseResolverBase } from "./base/semPreviousCourse.resolver.base";
import { SemPreviousCourse } from "./base/SemPreviousCourse";
import { SemPreviousCourseService } from "./semPreviousCourse.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SemPreviousCourse)
export class SemPreviousCourseResolver extends SemPreviousCourseResolverBase {
  constructor(
    protected readonly service: SemPreviousCourseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
