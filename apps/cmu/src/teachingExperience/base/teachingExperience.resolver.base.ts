/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateTeachingExperienceArgs } from "./CreateTeachingExperienceArgs";
import { UpdateTeachingExperienceArgs } from "./UpdateTeachingExperienceArgs";
import { DeleteTeachingExperienceArgs } from "./DeleteTeachingExperienceArgs";
import { TeachingExperienceCountArgs } from "./TeachingExperienceCountArgs";
import { TeachingExperienceFindManyArgs } from "./TeachingExperienceFindManyArgs";
import { TeachingExperienceFindUniqueArgs } from "./TeachingExperienceFindUniqueArgs";
import { TeachingExperience } from "./TeachingExperience";
import { TeachingExperienceService } from "../teachingExperience.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TeachingExperience)
export class TeachingExperienceResolverBase {
  constructor(
    protected readonly service: TeachingExperienceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "TeachingExperience",
    action: "read",
    possession: "any",
  })
  async _teachingExperiencesMeta(
    @graphql.Args() args: TeachingExperienceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [TeachingExperience])
  @nestAccessControl.UseRoles({
    resource: "TeachingExperience",
    action: "read",
    possession: "any",
  })
  async teachingExperiences(
    @graphql.Args() args: TeachingExperienceFindManyArgs
  ): Promise<TeachingExperience[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => TeachingExperience, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "TeachingExperience",
    action: "read",
    possession: "own",
  })
  async teachingExperience(
    @graphql.Args() args: TeachingExperienceFindUniqueArgs
  ): Promise<TeachingExperience | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => TeachingExperience)
  @nestAccessControl.UseRoles({
    resource: "TeachingExperience",
    action: "create",
    possession: "any",
  })
  async createTeachingExperience(
    @graphql.Args() args: CreateTeachingExperienceArgs
  ): Promise<TeachingExperience> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => TeachingExperience)
  @nestAccessControl.UseRoles({
    resource: "TeachingExperience",
    action: "update",
    possession: "any",
  })
  async updateTeachingExperience(
    @graphql.Args() args: UpdateTeachingExperienceArgs
  ): Promise<TeachingExperience | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => TeachingExperience)
  @nestAccessControl.UseRoles({
    resource: "TeachingExperience",
    action: "delete",
    possession: "any",
  })
  async deleteTeachingExperience(
    @graphql.Args() args: DeleteTeachingExperienceArgs
  ): Promise<TeachingExperience | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
