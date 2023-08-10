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
import { MultiprogramlockoutService } from "../multiprogramlockout.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MultiprogramlockoutCreateInput } from "./MultiprogramlockoutCreateInput";
import { MultiprogramlockoutWhereInput } from "./MultiprogramlockoutWhereInput";
import { MultiprogramlockoutWhereUniqueInput } from "./MultiprogramlockoutWhereUniqueInput";
import { MultiprogramlockoutFindManyArgs } from "./MultiprogramlockoutFindManyArgs";
import { MultiprogramlockoutUpdateInput } from "./MultiprogramlockoutUpdateInput";
import { Multiprogramlockout } from "./Multiprogramlockout";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MultiprogramlockoutControllerBase {
  constructor(
    protected readonly service: MultiprogramlockoutService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Multiprogramlockout })
  @nestAccessControl.UseRoles({
    resource: "Multiprogramlockout",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: MultiprogramlockoutCreateInput
  ): Promise<Multiprogramlockout> {
    return await this.service.create({
      data: data,
      select: {
        id: true,
        programId1: true,
        programId2: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Multiprogramlockout] })
  @ApiNestedQuery(MultiprogramlockoutFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Multiprogramlockout",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(
    @common.Req() request: Request
  ): Promise<Multiprogramlockout[]> {
    const args = plainToClass(MultiprogramlockoutFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        programId1: true,
        programId2: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Multiprogramlockout })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Multiprogramlockout",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: MultiprogramlockoutWhereUniqueInput
  ): Promise<Multiprogramlockout | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        programId1: true,
        programId2: true,
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
  @swagger.ApiOkResponse({ type: Multiprogramlockout })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Multiprogramlockout",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: MultiprogramlockoutWhereUniqueInput,
    @common.Body() data: MultiprogramlockoutUpdateInput
  ): Promise<Multiprogramlockout | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          id: true,
          programId1: true,
          programId2: true,
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
  @swagger.ApiOkResponse({ type: Multiprogramlockout })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Multiprogramlockout",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: MultiprogramlockoutWhereUniqueInput
  ): Promise<Multiprogramlockout | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          programId1: true,
          programId2: true,
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
