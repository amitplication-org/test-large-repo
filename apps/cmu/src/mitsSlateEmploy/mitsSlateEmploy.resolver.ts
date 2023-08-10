import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MitsSlateEmployResolverBase } from "./base/mitsSlateEmploy.resolver.base";
import { MitsSlateEmploy } from "./base/MitsSlateEmploy";
import { MitsSlateEmployService } from "./mitsSlateEmploy.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MitsSlateEmploy)
export class MitsSlateEmployResolver extends MitsSlateEmployResolverBase {
  constructor(
    protected readonly service: MitsSlateEmployService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
