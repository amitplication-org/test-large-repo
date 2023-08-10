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
import { CreateDecisionAoiRankMemberArgs } from "./CreateDecisionAoiRankMemberArgs";
import { UpdateDecisionAoiRankMemberArgs } from "./UpdateDecisionAoiRankMemberArgs";
import { DeleteDecisionAoiRankMemberArgs } from "./DeleteDecisionAoiRankMemberArgs";
import { DecisionAoiRankMemberCountArgs } from "./DecisionAoiRankMemberCountArgs";
import { DecisionAoiRankMemberFindManyArgs } from "./DecisionAoiRankMemberFindManyArgs";
import { DecisionAoiRankMemberFindUniqueArgs } from "./DecisionAoiRankMemberFindUniqueArgs";
import { DecisionAoiRankMember } from "./DecisionAoiRankMember";
import { DecisionAoiRankMemberService } from "../decisionAoiRankMember.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DecisionAoiRankMember)
export class DecisionAoiRankMemberResolverBase {
  constructor(
    protected readonly service: DecisionAoiRankMemberService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "DecisionAoiRankMember",
    action: "read",
    possession: "any",
  })
  async _decisionAoiRankMembersMeta(
    @graphql.Args() args: DecisionAoiRankMemberCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [DecisionAoiRankMember])
  @nestAccessControl.UseRoles({
    resource: "DecisionAoiRankMember",
    action: "read",
    possession: "any",
  })
  async decisionAoiRankMembers(
    @graphql.Args() args: DecisionAoiRankMemberFindManyArgs
  ): Promise<DecisionAoiRankMember[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => DecisionAoiRankMember, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "DecisionAoiRankMember",
    action: "read",
    possession: "own",
  })
  async decisionAoiRankMember(
    @graphql.Args() args: DecisionAoiRankMemberFindUniqueArgs
  ): Promise<DecisionAoiRankMember | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DecisionAoiRankMember)
  @nestAccessControl.UseRoles({
    resource: "DecisionAoiRankMember",
    action: "create",
    possession: "any",
  })
  async createDecisionAoiRankMember(
    @graphql.Args() args: CreateDecisionAoiRankMemberArgs
  ): Promise<DecisionAoiRankMember> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DecisionAoiRankMember)
  @nestAccessControl.UseRoles({
    resource: "DecisionAoiRankMember",
    action: "update",
    possession: "any",
  })
  async updateDecisionAoiRankMember(
    @graphql.Args() args: UpdateDecisionAoiRankMemberArgs
  ): Promise<DecisionAoiRankMember | null> {
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

  @graphql.Mutation(() => DecisionAoiRankMember)
  @nestAccessControl.UseRoles({
    resource: "DecisionAoiRankMember",
    action: "delete",
    possession: "any",
  })
  async deleteDecisionAoiRankMember(
    @graphql.Args() args: DeleteDecisionAoiRankMemberArgs
  ): Promise<DecisionAoiRankMember | null> {
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
