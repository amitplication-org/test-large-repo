import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ReviewIniResolverBase } from "./base/reviewIni.resolver.base";
import { ReviewIni } from "./base/ReviewIni";
import { ReviewIniService } from "./reviewIni.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ReviewIni)
export class ReviewIniResolver extends ReviewIniResolverBase {
  constructor(
    protected readonly service: ReviewIniService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
