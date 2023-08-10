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
import { SlateOrgService } from "../slateOrg.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SlateOrgCreateInput } from "./SlateOrgCreateInput";
import { SlateOrgWhereInput } from "./SlateOrgWhereInput";
import { SlateOrgWhereUniqueInput } from "./SlateOrgWhereUniqueInput";
import { SlateOrgFindManyArgs } from "./SlateOrgFindManyArgs";
import { SlateOrgUpdateInput } from "./SlateOrgUpdateInput";
import { SlateOrg } from "./SlateOrg";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SlateOrgControllerBase {
  constructor(
    protected readonly service: SlateOrgService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SlateOrg })
  @nestAccessControl.UseRoles({
    resource: "SlateOrg",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: SlateOrgCreateInput): Promise<SlateOrg> {
    return await this.service.create({
      data: data,
      select: {
        category: true,
        city: true,
        country: true,
        id: true,
        localName: true,
        numActiveApplicationsWithSchoolKeyInDatabase: true,
        numRecordsWithSchoolKeyInDatabase: true,
        orgType: true,
        postal: true,
        region: true,
        sharedName: true,
        status: true,
        street: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [SlateOrg] })
  @ApiNestedQuery(SlateOrgFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SlateOrg",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<SlateOrg[]> {
    const args = plainToClass(SlateOrgFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        category: true,
        city: true,
        country: true,
        id: true,
        localName: true,
        numActiveApplicationsWithSchoolKeyInDatabase: true,
        numRecordsWithSchoolKeyInDatabase: true,
        orgType: true,
        postal: true,
        region: true,
        sharedName: true,
        status: true,
        street: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SlateOrg })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SlateOrg",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: SlateOrgWhereUniqueInput
  ): Promise<SlateOrg | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        category: true,
        city: true,
        country: true,
        id: true,
        localName: true,
        numActiveApplicationsWithSchoolKeyInDatabase: true,
        numRecordsWithSchoolKeyInDatabase: true,
        orgType: true,
        postal: true,
        region: true,
        sharedName: true,
        status: true,
        street: true,
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
  @swagger.ApiOkResponse({ type: SlateOrg })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SlateOrg",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: SlateOrgWhereUniqueInput,
    @common.Body() data: SlateOrgUpdateInput
  ): Promise<SlateOrg | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          category: true,
          city: true,
          country: true,
          id: true,
          localName: true,
          numActiveApplicationsWithSchoolKeyInDatabase: true,
          numRecordsWithSchoolKeyInDatabase: true,
          orgType: true,
          postal: true,
          region: true,
          sharedName: true,
          status: true,
          street: true,
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
  @swagger.ApiOkResponse({ type: SlateOrg })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SlateOrg",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: SlateOrgWhereUniqueInput
  ): Promise<SlateOrg | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          category: true,
          city: true,
          country: true,
          id: true,
          localName: true,
          numActiveApplicationsWithSchoolKeyInDatabase: true,
          numRecordsWithSchoolKeyInDatabase: true,
          orgType: true,
          postal: true,
          region: true,
          sharedName: true,
          status: true,
          street: true,
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
