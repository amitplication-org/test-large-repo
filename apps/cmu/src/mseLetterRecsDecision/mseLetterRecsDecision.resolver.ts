import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MseLetterRecsDecisionResolverBase } from "./base/mseLetterRecsDecision.resolver.base";
import { MseLetterRecsDecision } from "./base/MseLetterRecsDecision";
import { MseLetterRecsDecisionService } from "./mseLetterRecsDecision.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MseLetterRecsDecision)
export class MseLetterRecsDecisionResolver extends MseLetterRecsDecisionResolverBase {
  constructor(
    protected readonly service: MseLetterRecsDecisionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
