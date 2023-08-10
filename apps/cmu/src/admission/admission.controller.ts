import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AdmissionService } from "./admission.service";
import { AdmissionControllerBase } from "./base/admission.controller.base";

@swagger.ApiTags("admissions")
@common.Controller("admissions")
export class AdmissionController extends AdmissionControllerBase {
  constructor(
    protected readonly service: AdmissionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
