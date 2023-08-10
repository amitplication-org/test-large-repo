import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { IniYearsExperienceResolverBase } from "./base/iniYearsExperience.resolver.base";
import { IniYearsExperience } from "./base/IniYearsExperience";
import { IniYearsExperienceService } from "./iniYearsExperience.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => IniYearsExperience)
export class IniYearsExperienceResolver extends IniYearsExperienceResolverBase {
  constructor(
    protected readonly service: IniYearsExperienceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
