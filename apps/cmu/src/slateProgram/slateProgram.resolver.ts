import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SlateProgramResolverBase } from "./base/slateProgram.resolver.base";
import { SlateProgram } from "./base/SlateProgram";
import { SlateProgramService } from "./slateProgram.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SlateProgram)
export class SlateProgramResolver extends SlateProgramResolverBase {
  constructor(
    protected readonly service: SlateProgramService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
