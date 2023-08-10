import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MseAqaResolverBase } from "./base/mseAqa.resolver.base";
import { MseAqa } from "./base/MseAqa";
import { MseAqaService } from "./mseAqa.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MseAqa)
export class MseAqaResolver extends MseAqaResolverBase {
  constructor(
    protected readonly service: MseAqaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
