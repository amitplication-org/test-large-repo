import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MitsSlateGreResolverBase } from "./base/mitsSlateGre.resolver.base";
import { MitsSlateGre } from "./base/MitsSlateGre";
import { MitsSlateGreService } from "./mitsSlateGre.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MitsSlateGre)
export class MitsSlateGreResolver extends MitsSlateGreResolverBase {
  constructor(
    protected readonly service: MitsSlateGreService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
