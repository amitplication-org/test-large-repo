import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VoucherTypeService } from "./voucherType.service";
import { VoucherTypeControllerBase } from "./base/voucherType.controller.base";

@swagger.ApiTags("voucherTypes")
@common.Controller("voucherTypes")
export class VoucherTypeController extends VoucherTypeControllerBase {
  constructor(
    protected readonly service: VoucherTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
