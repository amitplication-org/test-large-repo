import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MitsSlateReviewResolverBase } from "./base/mitsSlateReview.resolver.base";
import { MitsSlateReview } from "./base/MitsSlateReview";
import { MitsSlateReviewService } from "./mitsSlateReview.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MitsSlateReview)
export class MitsSlateReviewResolver extends MitsSlateReviewResolverBase {
  constructor(
    protected readonly service: MitsSlateReviewService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
