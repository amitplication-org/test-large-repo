import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ScsUserWebisoResolverBase } from "./base/scsUserWebiso.resolver.base";
import { ScsUserWebiso } from "./base/ScsUserWebiso";
import { ScsUserWebisoService } from "./scsUserWebiso.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ScsUserWebiso)
export class ScsUserWebisoResolver extends ScsUserWebisoResolverBase {
  constructor(
    protected readonly service: ScsUserWebisoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
