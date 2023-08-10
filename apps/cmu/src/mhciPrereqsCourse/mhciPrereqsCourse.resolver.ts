import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MhciPrereqsCourseResolverBase } from "./base/mhciPrereqsCourse.resolver.base";
import { MhciPrereqsCourse } from "./base/MhciPrereqsCourse";
import { MhciPrereqsCourseService } from "./mhciPrereqsCourse.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MhciPrereqsCourse)
export class MhciPrereqsCourseResolver extends MhciPrereqsCourseResolverBase {
  constructor(
    protected readonly service: MhciPrereqsCourseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
