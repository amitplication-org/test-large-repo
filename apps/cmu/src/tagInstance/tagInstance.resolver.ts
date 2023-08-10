import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TagInstanceResolverBase } from "./base/tagInstance.resolver.base";
import { TagInstance } from "./base/TagInstance";
import { TagInstanceService } from "./tagInstance.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TagInstance)
export class TagInstanceResolver extends TagInstanceResolverBase {
  constructor(
    protected readonly service: TagInstanceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
