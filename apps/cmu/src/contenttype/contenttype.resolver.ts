import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ContenttypeResolverBase } from "./base/contenttype.resolver.base";
import { Contenttype } from "./base/Contenttype";
import { ContenttypeService } from "./contenttype.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Contenttype)
export class ContenttypeResolver extends ContenttypeResolverBase {
  constructor(
    protected readonly service: ContenttypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
