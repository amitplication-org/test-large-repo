/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { PeSlateAppService } from "../peSlateApp.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PeSlateAppCreateInput } from "./PeSlateAppCreateInput";
import { PeSlateAppWhereInput } from "./PeSlateAppWhereInput";
import { PeSlateAppWhereUniqueInput } from "./PeSlateAppWhereUniqueInput";
import { PeSlateAppFindManyArgs } from "./PeSlateAppFindManyArgs";
import { PeSlateAppUpdateInput } from "./PeSlateAppUpdateInput";
import { PeSlateApp } from "./PeSlateApp";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PeSlateAppControllerBase {
  constructor(
    protected readonly service: PeSlateAppService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PeSlateApp })
  @nestAccessControl.UseRoles({
    resource: "PeSlateApp",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: PeSlateAppCreateInput
  ): Promise<PeSlateApp> {
    return await this.service.create({
      data: data,
      select: {
        applicationStatus: true,
        appSubmittedDate: true,
        birthdate: true,
        citizenshipStatus: true,
        decisionConfirmedExportCode: true,
        email: true,
        emailAddress: true,
        first: true,
        hispanic: true,
        id: true,
        ipedsClassification: true,
        language: true,
        last: true,
        mailingAddressCity: true,
        mailingAddressCountryFipsCode: true,
        mailingAddressCountryIso2Code: true,
        mailingAddressCountryIso3Code: true,
        mailingAddressCountryName: true,
        mailingAddressCountrySisExport: true,
        mailingAddressGeomarket: true,
        mailingAddressPostalCode: true,
        mailingAddressRegion: true,
        mailingAddressStreet1: true,
        mailingAddressStreet2: true,
        mailingAddressStreet3: true,
        mailingAddressValidFromDate: true,
        mailingAddressValidToDate: true,
        middle: true,
        mobilePhoneNumber: true,
        permanentAddressCity: true,
        permanentAddressCountry: true,
        permanentAddressCountryFipsCode: true,
        permanentAddressCountryIso2Code: true,
        permanentAddressCountryIso3Code: true,
        permanentAddressCountrySisExport: true,
        permanentAddressGeomarket: true,
        permanentAddressPostalCode: true,
        permanentAddressRegion: true,
        permanentAddressStreet1: true,
        permanentAddressStreet2: true,
        permanentAddressStreet3: true,
        personalWebSite: true,
        phoneNumber: true,
        prefix: true,
        primaryCitizenship: true,
        race: true,
        reference1Waiver: true,
        reference2Waiver: true,
        reference3Waiver: true,
        roundExportCode: true,
        secondaryCitizenship: true,
        sex: true,
        suffix: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [PeSlateApp] })
  @ApiNestedQuery(PeSlateAppFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PeSlateApp",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<PeSlateApp[]> {
    const args = plainToClass(PeSlateAppFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        applicationStatus: true,
        appSubmittedDate: true,
        birthdate: true,
        citizenshipStatus: true,
        decisionConfirmedExportCode: true,
        email: true,
        emailAddress: true,
        first: true,
        hispanic: true,
        id: true,
        ipedsClassification: true,
        language: true,
        last: true,
        mailingAddressCity: true,
        mailingAddressCountryFipsCode: true,
        mailingAddressCountryIso2Code: true,
        mailingAddressCountryIso3Code: true,
        mailingAddressCountryName: true,
        mailingAddressCountrySisExport: true,
        mailingAddressGeomarket: true,
        mailingAddressPostalCode: true,
        mailingAddressRegion: true,
        mailingAddressStreet1: true,
        mailingAddressStreet2: true,
        mailingAddressStreet3: true,
        mailingAddressValidFromDate: true,
        mailingAddressValidToDate: true,
        middle: true,
        mobilePhoneNumber: true,
        permanentAddressCity: true,
        permanentAddressCountry: true,
        permanentAddressCountryFipsCode: true,
        permanentAddressCountryIso2Code: true,
        permanentAddressCountryIso3Code: true,
        permanentAddressCountrySisExport: true,
        permanentAddressGeomarket: true,
        permanentAddressPostalCode: true,
        permanentAddressRegion: true,
        permanentAddressStreet1: true,
        permanentAddressStreet2: true,
        permanentAddressStreet3: true,
        personalWebSite: true,
        phoneNumber: true,
        prefix: true,
        primaryCitizenship: true,
        race: true,
        reference1Waiver: true,
        reference2Waiver: true,
        reference3Waiver: true,
        roundExportCode: true,
        secondaryCitizenship: true,
        sex: true,
        suffix: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PeSlateApp })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PeSlateApp",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: PeSlateAppWhereUniqueInput
  ): Promise<PeSlateApp | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        applicationStatus: true,
        appSubmittedDate: true,
        birthdate: true,
        citizenshipStatus: true,
        decisionConfirmedExportCode: true,
        email: true,
        emailAddress: true,
        first: true,
        hispanic: true,
        id: true,
        ipedsClassification: true,
        language: true,
        last: true,
        mailingAddressCity: true,
        mailingAddressCountryFipsCode: true,
        mailingAddressCountryIso2Code: true,
        mailingAddressCountryIso3Code: true,
        mailingAddressCountryName: true,
        mailingAddressCountrySisExport: true,
        mailingAddressGeomarket: true,
        mailingAddressPostalCode: true,
        mailingAddressRegion: true,
        mailingAddressStreet1: true,
        mailingAddressStreet2: true,
        mailingAddressStreet3: true,
        mailingAddressValidFromDate: true,
        mailingAddressValidToDate: true,
        middle: true,
        mobilePhoneNumber: true,
        permanentAddressCity: true,
        permanentAddressCountry: true,
        permanentAddressCountryFipsCode: true,
        permanentAddressCountryIso2Code: true,
        permanentAddressCountryIso3Code: true,
        permanentAddressCountrySisExport: true,
        permanentAddressGeomarket: true,
        permanentAddressPostalCode: true,
        permanentAddressRegion: true,
        permanentAddressStreet1: true,
        permanentAddressStreet2: true,
        permanentAddressStreet3: true,
        personalWebSite: true,
        phoneNumber: true,
        prefix: true,
        primaryCitizenship: true,
        race: true,
        reference1Waiver: true,
        reference2Waiver: true,
        reference3Waiver: true,
        roundExportCode: true,
        secondaryCitizenship: true,
        sex: true,
        suffix: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: PeSlateApp })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PeSlateApp",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: PeSlateAppWhereUniqueInput,
    @common.Body() data: PeSlateAppUpdateInput
  ): Promise<PeSlateApp | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          applicationStatus: true,
          appSubmittedDate: true,
          birthdate: true,
          citizenshipStatus: true,
          decisionConfirmedExportCode: true,
          email: true,
          emailAddress: true,
          first: true,
          hispanic: true,
          id: true,
          ipedsClassification: true,
          language: true,
          last: true,
          mailingAddressCity: true,
          mailingAddressCountryFipsCode: true,
          mailingAddressCountryIso2Code: true,
          mailingAddressCountryIso3Code: true,
          mailingAddressCountryName: true,
          mailingAddressCountrySisExport: true,
          mailingAddressGeomarket: true,
          mailingAddressPostalCode: true,
          mailingAddressRegion: true,
          mailingAddressStreet1: true,
          mailingAddressStreet2: true,
          mailingAddressStreet3: true,
          mailingAddressValidFromDate: true,
          mailingAddressValidToDate: true,
          middle: true,
          mobilePhoneNumber: true,
          permanentAddressCity: true,
          permanentAddressCountry: true,
          permanentAddressCountryFipsCode: true,
          permanentAddressCountryIso2Code: true,
          permanentAddressCountryIso3Code: true,
          permanentAddressCountrySisExport: true,
          permanentAddressGeomarket: true,
          permanentAddressPostalCode: true,
          permanentAddressRegion: true,
          permanentAddressStreet1: true,
          permanentAddressStreet2: true,
          permanentAddressStreet3: true,
          personalWebSite: true,
          phoneNumber: true,
          prefix: true,
          primaryCitizenship: true,
          race: true,
          reference1Waiver: true,
          reference2Waiver: true,
          reference3Waiver: true,
          roundExportCode: true,
          secondaryCitizenship: true,
          sex: true,
          suffix: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: PeSlateApp })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PeSlateApp",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: PeSlateAppWhereUniqueInput
  ): Promise<PeSlateApp | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          applicationStatus: true,
          appSubmittedDate: true,
          birthdate: true,
          citizenshipStatus: true,
          decisionConfirmedExportCode: true,
          email: true,
          emailAddress: true,
          first: true,
          hispanic: true,
          id: true,
          ipedsClassification: true,
          language: true,
          last: true,
          mailingAddressCity: true,
          mailingAddressCountryFipsCode: true,
          mailingAddressCountryIso2Code: true,
          mailingAddressCountryIso3Code: true,
          mailingAddressCountryName: true,
          mailingAddressCountrySisExport: true,
          mailingAddressGeomarket: true,
          mailingAddressPostalCode: true,
          mailingAddressRegion: true,
          mailingAddressStreet1: true,
          mailingAddressStreet2: true,
          mailingAddressStreet3: true,
          mailingAddressValidFromDate: true,
          mailingAddressValidToDate: true,
          middle: true,
          mobilePhoneNumber: true,
          permanentAddressCity: true,
          permanentAddressCountry: true,
          permanentAddressCountryFipsCode: true,
          permanentAddressCountryIso2Code: true,
          permanentAddressCountryIso3Code: true,
          permanentAddressCountrySisExport: true,
          permanentAddressGeomarket: true,
          permanentAddressPostalCode: true,
          permanentAddressRegion: true,
          permanentAddressStreet1: true,
          permanentAddressStreet2: true,
          permanentAddressStreet3: true,
          personalWebSite: true,
          phoneNumber: true,
          prefix: true,
          primaryCitizenship: true,
          race: true,
          reference1Waiver: true,
          reference2Waiver: true,
          reference3Waiver: true,
          roundExportCode: true,
          secondaryCitizenship: true,
          sex: true,
          suffix: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
