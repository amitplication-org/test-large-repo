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
import { LanguageAssessmentService } from "../languageAssessment.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { LanguageAssessmentCreateInput } from "./LanguageAssessmentCreateInput";
import { LanguageAssessmentWhereInput } from "./LanguageAssessmentWhereInput";
import { LanguageAssessmentWhereUniqueInput } from "./LanguageAssessmentWhereUniqueInput";
import { LanguageAssessmentFindManyArgs } from "./LanguageAssessmentFindManyArgs";
import { LanguageAssessmentUpdateInput } from "./LanguageAssessmentUpdateInput";
import { LanguageAssessment } from "./LanguageAssessment";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class LanguageAssessmentControllerBase {
  constructor(
    protected readonly service: LanguageAssessmentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: LanguageAssessment })
  @nestAccessControl.UseRoles({
    resource: "LanguageAssessment",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: LanguageAssessmentCreateInput
  ): Promise<LanguageAssessment> {
    return await this.service.create({
      data: data,
      select: {
        applicationId: true,
        competencyEvidence: true,
        id: true,
        language: true,
        listening: true,
        nativeSpeaker: true,
        reading: true,
        speaking: true,
        studyLevel: true,
        writing: true,
        yearsStudy: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [LanguageAssessment] })
  @ApiNestedQuery(LanguageAssessmentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "LanguageAssessment",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(
    @common.Req() request: Request
  ): Promise<LanguageAssessment[]> {
    const args = plainToClass(LanguageAssessmentFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        applicationId: true,
        competencyEvidence: true,
        id: true,
        language: true,
        listening: true,
        nativeSpeaker: true,
        reading: true,
        speaking: true,
        studyLevel: true,
        writing: true,
        yearsStudy: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: LanguageAssessment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "LanguageAssessment",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: LanguageAssessmentWhereUniqueInput
  ): Promise<LanguageAssessment | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        applicationId: true,
        competencyEvidence: true,
        id: true,
        language: true,
        listening: true,
        nativeSpeaker: true,
        reading: true,
        speaking: true,
        studyLevel: true,
        writing: true,
        yearsStudy: true,
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
  @swagger.ApiOkResponse({ type: LanguageAssessment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "LanguageAssessment",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: LanguageAssessmentWhereUniqueInput,
    @common.Body() data: LanguageAssessmentUpdateInput
  ): Promise<LanguageAssessment | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          applicationId: true,
          competencyEvidence: true,
          id: true,
          language: true,
          listening: true,
          nativeSpeaker: true,
          reading: true,
          speaking: true,
          studyLevel: true,
          writing: true,
          yearsStudy: true,
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
  @swagger.ApiOkResponse({ type: LanguageAssessment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "LanguageAssessment",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: LanguageAssessmentWhereUniqueInput
  ): Promise<LanguageAssessment | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          applicationId: true,
          competencyEvidence: true,
          id: true,
          language: true,
          listening: true,
          nativeSpeaker: true,
          reading: true,
          speaking: true,
          studyLevel: true,
          writing: true,
          yearsStudy: true,
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
