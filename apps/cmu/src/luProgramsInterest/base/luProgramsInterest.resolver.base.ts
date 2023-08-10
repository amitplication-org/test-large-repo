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
import { CreateLuProgramsInterestArgs } from "./CreateLuProgramsInterestArgs";
import { UpdateLuProgramsInterestArgs } from "./UpdateLuProgramsInterestArgs";
import { DeleteLuProgramsInterestArgs } from "./DeleteLuProgramsInterestArgs";
import { LuProgramsInterestCountArgs } from "./LuProgramsInterestCountArgs";
import { LuProgramsInterestFindManyArgs } from "./LuProgramsInterestFindManyArgs";
import { LuProgramsInterestFindUniqueArgs } from "./LuProgramsInterestFindUniqueArgs";
import { LuProgramsInterest } from "./LuProgramsInterest";
import { LuProgramsInterestService } from "../luProgramsInterest.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LuProgramsInterest)
export class LuProgramsInterestResolverBase {
  constructor(
    protected readonly service: LuProgramsInterestService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "LuProgramsInterest",
    action: "read",
    possession: "any",
  })
  async _luProgramsInterestsMeta(
    @graphql.Args() args: LuProgramsInterestCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [LuProgramsInterest])
  @nestAccessControl.UseRoles({
    resource: "LuProgramsInterest",
    action: "read",
    possession: "any",
  })
  async luProgramsInterests(
    @graphql.Args() args: LuProgramsInterestFindManyArgs
  ): Promise<LuProgramsInterest[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => LuProgramsInterest, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "LuProgramsInterest",
    action: "read",
    possession: "own",
  })
  async luProgramsInterest(
    @graphql.Args() args: LuProgramsInterestFindUniqueArgs
  ): Promise<LuProgramsInterest | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => LuProgramsInterest)
  @nestAccessControl.UseRoles({
    resource: "LuProgramsInterest",
    action: "create",
    possession: "any",
  })
  async createLuProgramsInterest(
    @graphql.Args() args: CreateLuProgramsInterestArgs
  ): Promise<LuProgramsInterest> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => LuProgramsInterest)
  @nestAccessControl.UseRoles({
    resource: "LuProgramsInterest",
    action: "update",
    possession: "any",
  })
  async updateLuProgramsInterest(
    @graphql.Args() args: UpdateLuProgramsInterestArgs
  ): Promise<LuProgramsInterest | null> {
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

  @graphql.Mutation(() => LuProgramsInterest)
  @nestAccessControl.UseRoles({
    resource: "LuProgramsInterest",
    action: "delete",
    possession: "any",
  })
  async deleteLuProgramsInterest(
    @graphql.Args() args: DeleteLuProgramsInterestArgs
  ): Promise<LuProgramsInterest | null> {
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
