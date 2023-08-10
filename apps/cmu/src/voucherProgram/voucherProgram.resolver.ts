import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { VoucherProgramResolverBase } from "./base/voucherProgram.resolver.base";
import { VoucherProgram } from "./base/VoucherProgram";
import { VoucherProgramService } from "./voucherProgram.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => VoucherProgram)
export class VoucherProgramResolver extends VoucherProgramResolverBase {
  constructor(
    protected readonly service: VoucherProgramService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
