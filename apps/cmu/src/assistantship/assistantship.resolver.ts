import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AssistantshipResolverBase } from "./base/assistantship.resolver.base";
import { Assistantship } from "./base/Assistantship";
import { AssistantshipService } from "./assistantship.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Assistantship)
export class AssistantshipResolver extends AssistantshipResolverBase {
  constructor(
    protected readonly service: AssistantshipService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
