import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ScsUserWebisoService } from "./scsUserWebiso.service";
import { ScsUserWebisoControllerBase } from "./base/scsUserWebiso.controller.base";

@swagger.ApiTags("scsUserWebisos")
@common.Controller("scsUserWebisos")
export class ScsUserWebisoController extends ScsUserWebisoControllerBase {
  constructor(
    protected readonly service: ScsUserWebisoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
