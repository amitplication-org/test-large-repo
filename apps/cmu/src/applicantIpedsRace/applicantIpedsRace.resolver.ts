import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ApplicantIpedsRaceResolverBase } from "./base/applicantIpedsRace.resolver.base";
import { ApplicantIpedsRace } from "./base/ApplicantIpedsRace";
import { ApplicantIpedsRaceService } from "./applicantIpedsRace.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ApplicantIpedsRace)
export class ApplicantIpedsRaceResolver extends ApplicantIpedsRaceResolverBase {
  constructor(
    protected readonly service: ApplicantIpedsRaceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
