import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BlacklistReviewerResolverBase } from "./base/blacklistReviewer.resolver.base";
import { BlacklistReviewer } from "./base/BlacklistReviewer";
import { BlacklistReviewerService } from "./blacklistReviewer.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BlacklistReviewer)
export class BlacklistReviewerResolver extends BlacklistReviewerResolverBase {
  constructor(
    protected readonly service: BlacklistReviewerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
