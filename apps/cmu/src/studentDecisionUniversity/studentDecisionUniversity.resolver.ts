import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { StudentDecisionUniversityResolverBase } from "./base/studentDecisionUniversity.resolver.base";
import { StudentDecisionUniversity } from "./base/StudentDecisionUniversity";
import { StudentDecisionUniversityService } from "./studentDecisionUniversity.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => StudentDecisionUniversity)
export class StudentDecisionUniversityResolver extends StudentDecisionUniversityResolverBase {
  constructor(
    protected readonly service: StudentDecisionUniversityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
