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
import { ApplicationContentService } from "../applicationContent.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ApplicationContentCreateInput } from "./ApplicationContentCreateInput";
import { ApplicationContentWhereInput } from "./ApplicationContentWhereInput";
import { ApplicationContentWhereUniqueInput } from "./ApplicationContentWhereUniqueInput";
import { ApplicationContentFindManyArgs } from "./ApplicationContentFindManyArgs";
import { ApplicationContentUpdateInput } from "./ApplicationContentUpdateInput";
import { ApplicationContent } from "./ApplicationContent";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ApplicationContentControllerBase {
  constructor(
    protected readonly service: ApplicationContentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ApplicationContent })
  @nestAccessControl.UseRoles({
    resource: "ApplicationContent",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: ApplicationContentCreateInput
  ): Promise<ApplicationContent> {
    return await this.service.create({
      data: data,
      select: {
        desired: true,
        id: true,
        programId: true,
        required: true,
        sectionIdentifier: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [ApplicationContent] })
  @ApiNestedQuery(ApplicationContentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ApplicationContent",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(
    @common.Req() request: Request
  ): Promise<ApplicationContent[]> {
    const args = plainToClass(ApplicationContentFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        desired: true,
        id: true,
        programId: true,
        required: true,
        sectionIdentifier: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ApplicationContent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ApplicationContent",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: ApplicationContentWhereUniqueInput
  ): Promise<ApplicationContent | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        desired: true,
        id: true,
        programId: true,
        required: true,
        sectionIdentifier: true,
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
  @swagger.ApiOkResponse({ type: ApplicationContent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ApplicationContent",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: ApplicationContentWhereUniqueInput,
    @common.Body() data: ApplicationContentUpdateInput
  ): Promise<ApplicationContent | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          desired: true,
          id: true,
          programId: true,
          required: true,
          sectionIdentifier: true,
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
  @swagger.ApiOkResponse({ type: ApplicationContent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ApplicationContent",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: ApplicationContentWhereUniqueInput
  ): Promise<ApplicationContent | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          desired: true,
          id: true,
          programId: true,
          required: true,
          sectionIdentifier: true,
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
