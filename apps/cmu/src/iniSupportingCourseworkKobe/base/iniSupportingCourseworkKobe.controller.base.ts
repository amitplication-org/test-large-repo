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
import { IniSupportingCourseworkKobeService } from "../iniSupportingCourseworkKobe.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { IniSupportingCourseworkKobeCreateInput } from "./IniSupportingCourseworkKobeCreateInput";
import { IniSupportingCourseworkKobeWhereInput } from "./IniSupportingCourseworkKobeWhereInput";
import { IniSupportingCourseworkKobeWhereUniqueInput } from "./IniSupportingCourseworkKobeWhereUniqueInput";
import { IniSupportingCourseworkKobeFindManyArgs } from "./IniSupportingCourseworkKobeFindManyArgs";
import { IniSupportingCourseworkKobeUpdateInput } from "./IniSupportingCourseworkKobeUpdateInput";
import { IniSupportingCourseworkKobe } from "./IniSupportingCourseworkKobe";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class IniSupportingCourseworkKobeControllerBase {
  constructor(
    protected readonly service: IniSupportingCourseworkKobeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: IniSupportingCourseworkKobe })
  @nestAccessControl.UseRoles({
    resource: "IniSupportingCourseworkKobe",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: IniSupportingCourseworkKobeCreateInput
  ): Promise<IniSupportingCourseworkKobe> {
    return await this.service.create({
      data: data,
      select: {
        applicationId: true,
        description: true,
        id: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [IniSupportingCourseworkKobe] })
  @ApiNestedQuery(IniSupportingCourseworkKobeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "IniSupportingCourseworkKobe",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(
    @common.Req() request: Request
  ): Promise<IniSupportingCourseworkKobe[]> {
    const args = plainToClass(
      IniSupportingCourseworkKobeFindManyArgs,
      request.query
    );
    return this.service.findMany({
      ...args,
      select: {
        applicationId: true,
        description: true,
        id: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: IniSupportingCourseworkKobe })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "IniSupportingCourseworkKobe",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: IniSupportingCourseworkKobeWhereUniqueInput
  ): Promise<IniSupportingCourseworkKobe | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        applicationId: true,
        description: true,
        id: true,
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
  @swagger.ApiOkResponse({ type: IniSupportingCourseworkKobe })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "IniSupportingCourseworkKobe",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: IniSupportingCourseworkKobeWhereUniqueInput,
    @common.Body() data: IniSupportingCourseworkKobeUpdateInput
  ): Promise<IniSupportingCourseworkKobe | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          applicationId: true,
          description: true,
          id: true,
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
  @swagger.ApiOkResponse({ type: IniSupportingCourseworkKobe })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "IniSupportingCourseworkKobe",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: IniSupportingCourseworkKobeWhereUniqueInput
  ): Promise<IniSupportingCourseworkKobe | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          applicationId: true,
          description: true,
          id: true,
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
