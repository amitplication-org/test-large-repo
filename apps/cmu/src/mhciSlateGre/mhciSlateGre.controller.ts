import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MhciSlateGreService } from "./mhciSlateGre.service";
import { MhciSlateGreControllerBase } from "./base/mhciSlateGre.controller.base";

@swagger.ApiTags("mhciSlateGres")
@common.Controller("mhciSlateGres")
export class MhciSlateGreController extends MhciSlateGreControllerBase {
  constructor(
    protected readonly service: MhciSlateGreService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
