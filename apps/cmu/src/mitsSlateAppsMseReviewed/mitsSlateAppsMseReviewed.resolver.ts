import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MitsSlateAppsMseReviewedResolverBase } from "./base/mitsSlateAppsMseReviewed.resolver.base";
import { MitsSlateAppsMseReviewed } from "./base/MitsSlateAppsMseReviewed";
import { MitsSlateAppsMseReviewedService } from "./mitsSlateAppsMseReviewed.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MitsSlateAppsMseReviewed)
export class MitsSlateAppsMseReviewedResolver extends MitsSlateAppsMseReviewedResolverBase {
  constructor(
    protected readonly service: MitsSlateAppsMseReviewedService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
