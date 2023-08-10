import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MseInterviewResolverBase } from "./base/mseInterview.resolver.base";
import { MseInterview } from "./base/MseInterview";
import { MseInterviewService } from "./mseInterview.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MseInterview)
export class MseInterviewResolver extends MseInterviewResolverBase {
  constructor(
    protected readonly service: MseInterviewService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
