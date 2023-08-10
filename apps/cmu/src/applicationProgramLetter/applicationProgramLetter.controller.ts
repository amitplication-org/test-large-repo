import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ApplicationProgramLetterService } from "./applicationProgramLetter.service";
import { ApplicationProgramLetterControllerBase } from "./base/applicationProgramLetter.controller.base";

@swagger.ApiTags("applicationProgramLetters")
@common.Controller("applicationProgramLetters")
export class ApplicationProgramLetterController extends ApplicationProgramLetterControllerBase {
  constructor(
    protected readonly service: ApplicationProgramLetterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
