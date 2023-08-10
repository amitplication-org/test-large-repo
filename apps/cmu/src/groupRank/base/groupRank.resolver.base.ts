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
import { CreateGroupRankArgs } from "./CreateGroupRankArgs";
import { UpdateGroupRankArgs } from "./UpdateGroupRankArgs";
import { DeleteGroupRankArgs } from "./DeleteGroupRankArgs";
import { GroupRankCountArgs } from "./GroupRankCountArgs";
import { GroupRankFindManyArgs } from "./GroupRankFindManyArgs";
import { GroupRankFindUniqueArgs } from "./GroupRankFindUniqueArgs";
import { GroupRank } from "./GroupRank";
import { GroupRankService } from "../groupRank.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GroupRank)
export class GroupRankResolverBase {
  constructor(
    protected readonly service: GroupRankService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "GroupRank",
    action: "read",
    possession: "any",
  })
  async _groupRanksMeta(
    @graphql.Args() args: GroupRankCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [GroupRank])
  @nestAccessControl.UseRoles({
    resource: "GroupRank",
    action: "read",
    possession: "any",
  })
  async groupRanks(
    @graphql.Args() args: GroupRankFindManyArgs
  ): Promise<GroupRank[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => GroupRank, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "GroupRank",
    action: "read",
    possession: "own",
  })
  async groupRank(
    @graphql.Args() args: GroupRankFindUniqueArgs
  ): Promise<GroupRank | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => GroupRank)
  @nestAccessControl.UseRoles({
    resource: "GroupRank",
    action: "create",
    possession: "any",
  })
  async createGroupRank(
    @graphql.Args() args: CreateGroupRankArgs
  ): Promise<GroupRank> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => GroupRank)
  @nestAccessControl.UseRoles({
    resource: "GroupRank",
    action: "update",
    possession: "any",
  })
  async updateGroupRank(
    @graphql.Args() args: UpdateGroupRankArgs
  ): Promise<GroupRank | null> {
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

  @graphql.Mutation(() => GroupRank)
  @nestAccessControl.UseRoles({
    resource: "GroupRank",
    action: "delete",
    possession: "any",
  })
  async deleteGroupRank(
    @graphql.Args() args: DeleteGroupRankArgs
  ): Promise<GroupRank | null> {
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
