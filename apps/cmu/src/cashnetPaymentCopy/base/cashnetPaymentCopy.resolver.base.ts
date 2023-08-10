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
import { CreateCashnetPaymentCopyArgs } from "./CreateCashnetPaymentCopyArgs";
import { UpdateCashnetPaymentCopyArgs } from "./UpdateCashnetPaymentCopyArgs";
import { DeleteCashnetPaymentCopyArgs } from "./DeleteCashnetPaymentCopyArgs";
import { CashnetPaymentCopyCountArgs } from "./CashnetPaymentCopyCountArgs";
import { CashnetPaymentCopyFindManyArgs } from "./CashnetPaymentCopyFindManyArgs";
import { CashnetPaymentCopyFindUniqueArgs } from "./CashnetPaymentCopyFindUniqueArgs";
import { CashnetPaymentCopy } from "./CashnetPaymentCopy";
import { CashnetPaymentCopyService } from "../cashnetPaymentCopy.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CashnetPaymentCopy)
export class CashnetPaymentCopyResolverBase {
  constructor(
    protected readonly service: CashnetPaymentCopyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CashnetPaymentCopy",
    action: "read",
    possession: "any",
  })
  async _cashnetPaymentCopiesMeta(
    @graphql.Args() args: CashnetPaymentCopyCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [CashnetPaymentCopy])
  @nestAccessControl.UseRoles({
    resource: "CashnetPaymentCopy",
    action: "read",
    possession: "any",
  })
  async cashnetPaymentCopies(
    @graphql.Args() args: CashnetPaymentCopyFindManyArgs
  ): Promise<CashnetPaymentCopy[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => CashnetPaymentCopy, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CashnetPaymentCopy",
    action: "read",
    possession: "own",
  })
  async cashnetPaymentCopy(
    @graphql.Args() args: CashnetPaymentCopyFindUniqueArgs
  ): Promise<CashnetPaymentCopy | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CashnetPaymentCopy)
  @nestAccessControl.UseRoles({
    resource: "CashnetPaymentCopy",
    action: "create",
    possession: "any",
  })
  async createCashnetPaymentCopy(
    @graphql.Args() args: CreateCashnetPaymentCopyArgs
  ): Promise<CashnetPaymentCopy> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CashnetPaymentCopy)
  @nestAccessControl.UseRoles({
    resource: "CashnetPaymentCopy",
    action: "update",
    possession: "any",
  })
  async updateCashnetPaymentCopy(
    @graphql.Args() args: UpdateCashnetPaymentCopyArgs
  ): Promise<CashnetPaymentCopy | null> {
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

  @graphql.Mutation(() => CashnetPaymentCopy)
  @nestAccessControl.UseRoles({
    resource: "CashnetPaymentCopy",
    action: "delete",
    possession: "any",
  })
  async deleteCashnetPaymentCopy(
    @graphql.Args() args: DeleteCashnetPaymentCopyArgs
  ): Promise<CashnetPaymentCopy | null> {
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
