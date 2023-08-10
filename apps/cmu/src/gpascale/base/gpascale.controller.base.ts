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
import { GpascaleService } from "../gpascale.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { GpascaleCreateInput } from "./GpascaleCreateInput";
import { GpascaleWhereInput } from "./GpascaleWhereInput";
import { GpascaleWhereUniqueInput } from "./GpascaleWhereUniqueInput";
import { GpascaleFindManyArgs } from "./GpascaleFindManyArgs";
import { GpascaleUpdateInput } from "./GpascaleUpdateInput";
import { Gpascale } from "./Gpascale";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class GpascaleControllerBase {
  constructor(
    protected readonly service: GpascaleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Gpascale })
  @nestAccessControl.UseRoles({
    resource: "Gpascale",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: GpascaleCreateInput): Promise<Gpascale> {
    return await this.service.create({
      data: data,
      select: {
        formula: true,
        id: true,
        name: true,
        sortorder: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Gpascale] })
  @ApiNestedQuery(GpascaleFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Gpascale",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Gpascale[]> {
    const args = plainToClass(GpascaleFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        formula: true,
        id: true,
        name: true,
        sortorder: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Gpascale })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Gpascale",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: GpascaleWhereUniqueInput
  ): Promise<Gpascale | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        formula: true,
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
  @swagger.ApiOkResponse({ type: Gpascale })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Gpascale",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: GpascaleWhereUniqueInput,
    @common.Body() data: GpascaleUpdateInput
  ): Promise<Gpascale | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          formula: true,
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
  @swagger.ApiOkResponse({ type: Gpascale })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Gpascale",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: GpascaleWhereUniqueInput
  ): Promise<Gpascale | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          formula: true,
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
