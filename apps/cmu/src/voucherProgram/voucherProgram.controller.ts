import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VoucherProgramService } from "./voucherProgram.service";
import { VoucherProgramControllerBase } from "./base/voucherProgram.controller.base";

@swagger.ApiTags("voucherPrograms")
@common.Controller("voucherPrograms")
export class VoucherProgramController extends VoucherProgramControllerBase {
  constructor(
    protected readonly service: VoucherProgramService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
