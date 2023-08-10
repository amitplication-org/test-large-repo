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
import { CreateSlateLangCodeArgs } from "./CreateSlateLangCodeArgs";
import { UpdateSlateLangCodeArgs } from "./UpdateSlateLangCodeArgs";
import { DeleteSlateLangCodeArgs } from "./DeleteSlateLangCodeArgs";
import { SlateLangCodeCountArgs } from "./SlateLangCodeCountArgs";
import { SlateLangCodeFindManyArgs } from "./SlateLangCodeFindManyArgs";
import { SlateLangCodeFindUniqueArgs } from "./SlateLangCodeFindUniqueArgs";
import { SlateLangCode } from "./SlateLangCode";
import { SlateLangCodeService } from "../slateLangCode.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SlateLangCode)
export class SlateLangCodeResolverBase {
  constructor(
    protected readonly service: SlateLangCodeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "SlateLangCode",
    action: "read",
    possession: "any",
  })
  async _slateLangCodesMeta(
    @graphql.Args() args: SlateLangCodeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [SlateLangCode])
  @nestAccessControl.UseRoles({
    resource: "SlateLangCode",
    action: "read",
    possession: "any",
  })
  async slateLangCodes(
    @graphql.Args() args: SlateLangCodeFindManyArgs
  ): Promise<SlateLangCode[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => SlateLangCode, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "SlateLangCode",
    action: "read",
    possession: "own",
  })
  async slateLangCode(
    @graphql.Args() args: SlateLangCodeFindUniqueArgs
  ): Promise<SlateLangCode | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SlateLangCode)
  @nestAccessControl.UseRoles({
    resource: "SlateLangCode",
    action: "create",
    possession: "any",
  })
  async createSlateLangCode(
    @graphql.Args() args: CreateSlateLangCodeArgs
  ): Promise<SlateLangCode> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SlateLangCode)
  @nestAccessControl.UseRoles({
    resource: "SlateLangCode",
    action: "update",
    possession: "any",
  })
  async updateSlateLangCode(
    @graphql.Args() args: UpdateSlateLangCodeArgs
  ): Promise<SlateLangCode | null> {
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

  @graphql.Mutation(() => SlateLangCode)
  @nestAccessControl.UseRoles({
    resource: "SlateLangCode",
    action: "delete",
    possession: "any",
  })
  async deleteSlateLangCode(
    @graphql.Args() args: DeleteSlateLangCodeArgs
  ): Promise<SlateLangCode | null> {
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
