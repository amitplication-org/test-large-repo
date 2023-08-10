import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SlateTestScoreResolverBase } from "./base/slateTestScore.resolver.base";
import { SlateTestScore } from "./base/SlateTestScore";
import { SlateTestScoreService } from "./slateTestScore.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SlateTestScore)
export class SlateTestScoreResolver extends SlateTestScoreResolverBase {
  constructor(
    protected readonly service: SlateTestScoreService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
