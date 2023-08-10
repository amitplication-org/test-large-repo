import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { StudentDecisionHistoryResolverBase } from "./base/studentDecisionHistory.resolver.base";
import { StudentDecisionHistory } from "./base/StudentDecisionHistory";
import { StudentDecisionHistoryService } from "./studentDecisionHistory.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => StudentDecisionHistory)
export class StudentDecisionHistoryResolver extends StudentDecisionHistoryResolverBase {
  constructor(
    protected readonly service: StudentDecisionHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
