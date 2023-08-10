import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MhciPrereqsReviewerResolverBase } from "./base/mhciPrereqsReviewer.resolver.base";
import { MhciPrereqsReviewer } from "./base/MhciPrereqsReviewer";
import { MhciPrereqsReviewerService } from "./mhciPrereqsReviewer.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MhciPrereqsReviewer)
export class MhciPrereqsReviewerResolver extends MhciPrereqsReviewerResolverBase {
  constructor(
    protected readonly service: MhciPrereqsReviewerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
