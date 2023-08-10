import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FieldsofstudyService } from "./fieldsofstudy.service";
import { FieldsofstudyControllerBase } from "./base/fieldsofstudy.controller.base";

@swagger.ApiTags("fieldsofstudies")
@common.Controller("fieldsofstudies")
export class FieldsofstudyController extends FieldsofstudyControllerBase {
  constructor(
    protected readonly service: FieldsofstudyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
