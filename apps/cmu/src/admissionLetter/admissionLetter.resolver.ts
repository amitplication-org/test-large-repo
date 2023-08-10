import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AdmissionLetterResolverBase } from "./base/admissionLetter.resolver.base";
import { AdmissionLetter } from "./base/AdmissionLetter";
import { AdmissionLetterService } from "./admissionLetter.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AdmissionLetter)
export class AdmissionLetterResolver extends AdmissionLetterResolverBase {
  constructor(
    protected readonly service: AdmissionLetterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
