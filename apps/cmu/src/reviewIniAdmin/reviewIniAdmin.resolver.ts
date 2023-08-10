import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ReviewIniAdminResolverBase } from "./base/reviewIniAdmin.resolver.base";
import { ReviewIniAdmin } from "./base/ReviewIniAdmin";
import { ReviewIniAdminService } from "./reviewIniAdmin.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ReviewIniAdmin)
export class ReviewIniAdminResolver extends ReviewIniAdminResolverBase {
  constructor(
    protected readonly service: ReviewIniAdminService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
