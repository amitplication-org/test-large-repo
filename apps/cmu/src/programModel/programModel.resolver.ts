import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ProgramModelResolverBase } from "./base/programModel.resolver.base";
import { ProgramModel } from "./base/ProgramModel";
import { ProgramModelService } from "./programModel.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ProgramModel)
export class ProgramModelResolver extends ProgramModelResolverBase {
  constructor(
    protected readonly service: ProgramModelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
