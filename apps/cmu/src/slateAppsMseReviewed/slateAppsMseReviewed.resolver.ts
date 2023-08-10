import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SlateAppsMseReviewedResolverBase } from "./base/slateAppsMseReviewed.resolver.base";
import { SlateAppsMseReviewed } from "./base/SlateAppsMseReviewed";
import { SlateAppsMseReviewedService } from "./slateAppsMseReviewed.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SlateAppsMseReviewed)
export class SlateAppsMseReviewedResolver extends SlateAppsMseReviewedResolverBase {
  constructor(
    protected readonly service: SlateAppsMseReviewedService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
