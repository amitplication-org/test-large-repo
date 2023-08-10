import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { VoucherApplicationErrorResolverBase } from "./base/voucherApplicationError.resolver.base";
import { VoucherApplicationError } from "./base/VoucherApplicationError";
import { VoucherApplicationErrorService } from "./voucherApplicationError.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => VoucherApplicationError)
export class VoucherApplicationErrorResolver extends VoucherApplicationErrorResolverBase {
  constructor(
    protected readonly service: VoucherApplicationErrorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
