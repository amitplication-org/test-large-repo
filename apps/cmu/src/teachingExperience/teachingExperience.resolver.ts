import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TeachingExperienceResolverBase } from "./base/teachingExperience.resolver.base";
import { TeachingExperience } from "./base/TeachingExperience";
import { TeachingExperienceService } from "./teachingExperience.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TeachingExperience)
export class TeachingExperienceResolver extends TeachingExperienceResolverBase {
  constructor(
    protected readonly service: TeachingExperienceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
