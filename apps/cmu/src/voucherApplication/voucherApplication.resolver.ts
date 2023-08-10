import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { VoucherApplicationResolverBase } from "./base/voucherApplication.resolver.base";
import { VoucherApplication } from "./base/VoucherApplication";
import { VoucherApplicationService } from "./voucherApplication.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => VoucherApplication)
export class VoucherApplicationResolver extends VoucherApplicationResolverBase {
  constructor(
    protected readonly service: VoucherApplicationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
