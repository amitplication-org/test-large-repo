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
import { EthnicityService } from "../ethnicity.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { EthnicityCreateInput } from "./EthnicityCreateInput";
import { EthnicityWhereInput } from "./EthnicityWhereInput";
import { EthnicityWhereUniqueInput } from "./EthnicityWhereUniqueInput";
import { EthnicityFindManyArgs } from "./EthnicityFindManyArgs";
import { EthnicityUpdateInput } from "./EthnicityUpdateInput";
import { Ethnicity } from "./Ethnicity";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class EthnicityControllerBase {
  constructor(
    protected readonly service: EthnicityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Ethnicity })
  @nestAccessControl.UseRoles({
    resource: "Ethnicity",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: EthnicityCreateInput): Promise<Ethnicity> {
    return await this.service.create({
      data: data,
      select: {
        id: true,
        name: true,
        sortorder: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Ethnicity] })
  @ApiNestedQuery(EthnicityFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Ethnicity",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Ethnicity[]> {
    const args = plainToClass(EthnicityFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        name: true,
        sortorder: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Ethnicity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Ethnicity",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: EthnicityWhereUniqueInput
  ): Promise<Ethnicity | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        name: true,
        sortorder: true,
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
  @swagger.ApiOkResponse({ type: Ethnicity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Ethnicity",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: EthnicityWhereUniqueInput,
    @common.Body() data: EthnicityUpdateInput
  ): Promise<Ethnicity | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          id: true,
          name: true,
          sortorder: true,
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
  @swagger.ApiOkResponse({ type: Ethnicity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Ethnicity",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: EthnicityWhereUniqueInput
  ): Promise<Ethnicity | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          name: true,
          sortorder: true,
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
