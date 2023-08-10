import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DatafileinfoResolverBase } from "./base/datafileinfo.resolver.base";
import { Datafileinfo } from "./base/Datafileinfo";
import { DatafileinfoService } from "./datafileinfo.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Datafileinfo)
export class DatafileinfoResolver extends DatafileinfoResolverBase {
  constructor(
    protected readonly service: DatafileinfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
