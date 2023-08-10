import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ApplicationDecisionSchoolResolverBase } from "./base/applicationDecisionSchool.resolver.base";
import { ApplicationDecisionSchool } from "./base/ApplicationDecisionSchool";
import { ApplicationDecisionSchoolService } from "./applicationDecisionSchool.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ApplicationDecisionSchool)
export class ApplicationDecisionSchoolResolver extends ApplicationDecisionSchoolResolverBase {
  constructor(
    protected readonly service: ApplicationDecisionSchoolService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
