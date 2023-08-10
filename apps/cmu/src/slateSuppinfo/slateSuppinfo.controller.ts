import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SlateSuppinfoService } from "./slateSuppinfo.service";
import { SlateSuppinfoControllerBase } from "./base/slateSuppinfo.controller.base";

@swagger.ApiTags("slateSuppinfos")
@common.Controller("slateSuppinfos")
export class SlateSuppinfoController extends SlateSuppinfoControllerBase {
  constructor(
    protected readonly service: SlateSuppinfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
