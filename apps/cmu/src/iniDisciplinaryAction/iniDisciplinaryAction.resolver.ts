import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { IniDisciplinaryActionResolverBase } from "./base/iniDisciplinaryAction.resolver.base";
import { IniDisciplinaryAction } from "./base/IniDisciplinaryAction";
import { IniDisciplinaryActionService } from "./iniDisciplinaryAction.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => IniDisciplinaryAction)
export class IniDisciplinaryActionResolver extends IniDisciplinaryActionResolverBase {
  constructor(
    protected readonly service: IniDisciplinaryActionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
