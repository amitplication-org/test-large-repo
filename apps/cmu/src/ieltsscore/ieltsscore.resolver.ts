import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { IeltsscoreResolverBase } from "./base/ieltsscore.resolver.base";
import { Ieltsscore } from "./base/Ieltsscore";
import { IeltsscoreService } from "./ieltsscore.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Ieltsscore)
export class IeltsscoreResolver extends IeltsscoreResolverBase {
  constructor(
    protected readonly service: IeltsscoreService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
