import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { StudentDecisionResolverBase } from "./base/studentDecision.resolver.base";
import { StudentDecision } from "./base/StudentDecision";
import { StudentDecisionService } from "./studentDecision.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => StudentDecision)
export class StudentDecisionResolver extends StudentDecisionResolverBase {
  constructor(
    protected readonly service: StudentDecisionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
