import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ApplicationContentResolverBase } from "./base/applicationContent.resolver.base";
import { ApplicationContent } from "./base/ApplicationContent";
import { ApplicationContentService } from "./applicationContent.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ApplicationContent)
export class ApplicationContentResolver extends ApplicationContentResolverBase {
  constructor(
    protected readonly service: ApplicationContentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
