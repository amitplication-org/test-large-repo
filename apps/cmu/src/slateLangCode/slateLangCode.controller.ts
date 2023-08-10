import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SlateLangCodeService } from "./slateLangCode.service";
import { SlateLangCodeControllerBase } from "./base/slateLangCode.controller.base";

@swagger.ApiTags("slateLangCodes")
@common.Controller("slateLangCodes")
export class SlateLangCodeController extends SlateLangCodeControllerBase {
  constructor(
    protected readonly service: SlateLangCodeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
