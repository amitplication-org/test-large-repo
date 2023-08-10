import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { VoucherTypeResolverBase } from "./base/voucherType.resolver.base";
import { VoucherType } from "./base/VoucherType";
import { VoucherTypeService } from "./voucherType.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => VoucherType)
export class VoucherTypeResolver extends VoucherTypeResolverBase {
  constructor(
    protected readonly service: VoucherTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
