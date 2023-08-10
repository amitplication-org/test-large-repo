import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AdmissionLetterService } from "./admissionLetter.service";
import { AdmissionLetterControllerBase } from "./base/admissionLetter.controller.base";

@swagger.ApiTags("admissionLetters")
@common.Controller("admissionLetters")
export class AdmissionLetterController extends AdmissionLetterControllerBase {
  constructor(
    protected readonly service: AdmissionLetterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
