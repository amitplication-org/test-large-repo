import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { IpedsRaceResolverBase } from "./base/ipedsRace.resolver.base";
import { IpedsRace } from "./base/IpedsRace";
import { IpedsRaceService } from "./ipedsRace.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => IpedsRace)
export class IpedsRaceResolver extends IpedsRaceResolverBase {
  constructor(
    protected readonly service: IpedsRaceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
