import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SlateProgramsMseReviewedResolverBase } from "./base/slateProgramsMseReviewed.resolver.base";
import { SlateProgramsMseReviewed } from "./base/SlateProgramsMseReviewed";
import { SlateProgramsMseReviewedService } from "./slateProgramsMseReviewed.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SlateProgramsMseReviewed)
export class SlateProgramsMseReviewedResolver extends SlateProgramsMseReviewedResolverBase {
  constructor(
    protected readonly service: SlateProgramsMseReviewedService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
