import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DietrichDiversityResolverBase } from "./base/dietrichDiversity.resolver.base";
import { DietrichDiversity } from "./base/DietrichDiversity";
import { DietrichDiversityService } from "./dietrichDiversity.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DietrichDiversity)
export class DietrichDiversityResolver extends DietrichDiversityResolverBase {
  constructor(
    protected readonly service: DietrichDiversityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
