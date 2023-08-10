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
import { CreateLuUsersUsertypesHistoryArgs } from "./CreateLuUsersUsertypesHistoryArgs";
import { UpdateLuUsersUsertypesHistoryArgs } from "./UpdateLuUsersUsertypesHistoryArgs";
import { DeleteLuUsersUsertypesHistoryArgs } from "./DeleteLuUsersUsertypesHistoryArgs";
import { LuUsersUsertypesHistoryCountArgs } from "./LuUsersUsertypesHistoryCountArgs";
import { LuUsersUsertypesHistoryFindManyArgs } from "./LuUsersUsertypesHistoryFindManyArgs";
import { LuUsersUsertypesHistoryFindUniqueArgs } from "./LuUsersUsertypesHistoryFindUniqueArgs";
import { LuUsersUsertypesHistory } from "./LuUsersUsertypesHistory";
import { LuUsersUsertypesHistoryService } from "../luUsersUsertypesHistory.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LuUsersUsertypesHistory)
export class LuUsersUsertypesHistoryResolverBase {
  constructor(
    protected readonly service: LuUsersUsertypesHistoryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "LuUsersUsertypesHistory",
    action: "read",
    possession: "any",
  })
  async _luUsersUsertypesHistoriesMeta(
    @graphql.Args() args: LuUsersUsertypesHistoryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [LuUsersUsertypesHistory])
  @nestAccessControl.UseRoles({
    resource: "LuUsersUsertypesHistory",
    action: "read",
    possession: "any",
  })
  async luUsersUsertypesHistories(
    @graphql.Args() args: LuUsersUsertypesHistoryFindManyArgs
  ): Promise<LuUsersUsertypesHistory[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => LuUsersUsertypesHistory, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "LuUsersUsertypesHistory",
    action: "read",
    possession: "own",
  })
  async luUsersUsertypesHistory(
    @graphql.Args() args: LuUsersUsertypesHistoryFindUniqueArgs
  ): Promise<LuUsersUsertypesHistory | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => LuUsersUsertypesHistory)
  @nestAccessControl.UseRoles({
    resource: "LuUsersUsertypesHistory",
    action: "create",
    possession: "any",
  })
  async createLuUsersUsertypesHistory(
    @graphql.Args() args: CreateLuUsersUsertypesHistoryArgs
  ): Promise<LuUsersUsertypesHistory> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => LuUsersUsertypesHistory)
  @nestAccessControl.UseRoles({
    resource: "LuUsersUsertypesHistory",
    action: "update",
    possession: "any",
  })
  async updateLuUsersUsertypesHistory(
    @graphql.Args() args: UpdateLuUsersUsertypesHistoryArgs
  ): Promise<LuUsersUsertypesHistory | null> {
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

  @graphql.Mutation(() => LuUsersUsertypesHistory)
  @nestAccessControl.UseRoles({
    resource: "LuUsersUsertypesHistory",
    action: "delete",
    possession: "any",
  })
  async deleteLuUsersUsertypesHistory(
    @graphql.Args() args: DeleteLuUsersUsertypesHistoryArgs
  ): Promise<LuUsersUsertypesHistory | null> {
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
