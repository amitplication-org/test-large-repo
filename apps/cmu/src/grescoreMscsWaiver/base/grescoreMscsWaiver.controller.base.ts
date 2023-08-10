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
import { GrescoreMscsWaiverService } from "../grescoreMscsWaiver.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { GrescoreMscsWaiverCreateInput } from "./GrescoreMscsWaiverCreateInput";
import { GrescoreMscsWaiverWhereInput } from "./GrescoreMscsWaiverWhereInput";
import { GrescoreMscsWaiverWhereUniqueInput } from "./GrescoreMscsWaiverWhereUniqueInput";
import { GrescoreMscsWaiverFindManyArgs } from "./GrescoreMscsWaiverFindManyArgs";
import { GrescoreMscsWaiverUpdateInput } from "./GrescoreMscsWaiverUpdateInput";
import { GrescoreMscsWaiver } from "./GrescoreMscsWaiver";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class GrescoreMscsWaiverControllerBase {
  constructor(
    protected readonly service: GrescoreMscsWaiverService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: GrescoreMscsWaiver })
  @nestAccessControl.UseRoles({
    resource: "GrescoreMscsWaiver",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: GrescoreMscsWaiverCreateInput
  ): Promise<GrescoreMscsWaiver> {
    return await this.service.create({
      data: data,
      select: {
        id: true,
        waiverAgree: true,
        waiverTime: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [GrescoreMscsWaiver] })
  @ApiNestedQuery(GrescoreMscsWaiverFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "GrescoreMscsWaiver",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(
    @common.Req() request: Request
  ): Promise<GrescoreMscsWaiver[]> {
    const args = plainToClass(GrescoreMscsWaiverFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        waiverAgree: true,
        waiverTime: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: GrescoreMscsWaiver })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GrescoreMscsWaiver",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: GrescoreMscsWaiverWhereUniqueInput
  ): Promise<GrescoreMscsWaiver | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        waiverAgree: true,
        waiverTime: true,
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
  @swagger.ApiOkResponse({ type: GrescoreMscsWaiver })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GrescoreMscsWaiver",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: GrescoreMscsWaiverWhereUniqueInput,
    @common.Body() data: GrescoreMscsWaiverUpdateInput
  ): Promise<GrescoreMscsWaiver | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          id: true,
          waiverAgree: true,
          waiverTime: true,
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
  @swagger.ApiOkResponse({ type: GrescoreMscsWaiver })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GrescoreMscsWaiver",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: GrescoreMscsWaiverWhereUniqueInput
  ): Promise<GrescoreMscsWaiver | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          waiverAgree: true,
          waiverTime: true,
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
