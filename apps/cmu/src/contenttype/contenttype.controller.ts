import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ContenttypeService } from "./contenttype.service";
import { ContenttypeControllerBase } from "./base/contenttype.controller.base";

@swagger.ApiTags("contenttypes")
@common.Controller("contenttypes")
export class ContenttypeController extends ContenttypeControllerBase {
  constructor(
    protected readonly service: ContenttypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
