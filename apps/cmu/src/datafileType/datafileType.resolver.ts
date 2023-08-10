import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DatafileTypeResolverBase } from "./base/datafileType.resolver.base";
import { DatafileType } from "./base/DatafileType";
import { DatafileTypeService } from "./datafileType.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DatafileType)
export class DatafileTypeResolver extends DatafileTypeResolverBase {
  constructor(
    protected readonly service: DatafileTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
