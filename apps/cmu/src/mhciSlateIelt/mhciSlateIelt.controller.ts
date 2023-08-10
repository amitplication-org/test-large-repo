import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MhciSlateIeltService } from "./mhciSlateIelt.service";
import { MhciSlateIeltControllerBase } from "./base/mhciSlateIelt.controller.base";

@swagger.ApiTags("mhciSlateIelts")
@common.Controller("mhciSlateIelts")
export class MhciSlateIeltController extends MhciSlateIeltControllerBase {
  constructor(
    protected readonly service: MhciSlateIeltService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
