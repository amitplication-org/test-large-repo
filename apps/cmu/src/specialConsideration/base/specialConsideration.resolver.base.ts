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
import { CreateSpecialConsiderationArgs } from "./CreateSpecialConsiderationArgs";
import { UpdateSpecialConsiderationArgs } from "./UpdateSpecialConsiderationArgs";
import { DeleteSpecialConsiderationArgs } from "./DeleteSpecialConsiderationArgs";
import { SpecialConsiderationCountArgs } from "./SpecialConsiderationCountArgs";
import { SpecialConsiderationFindManyArgs } from "./SpecialConsiderationFindManyArgs";
import { SpecialConsiderationFindUniqueArgs } from "./SpecialConsiderationFindUniqueArgs";
import { SpecialConsideration } from "./SpecialConsideration";
import { SpecialConsiderationService } from "../specialConsideration.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SpecialConsideration)
export class SpecialConsiderationResolverBase {
  constructor(
    protected readonly service: SpecialConsiderationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "SpecialConsideration",
    action: "read",
    possession: "any",
  })
  async _specialConsiderationsMeta(
    @graphql.Args() args: SpecialConsiderationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [SpecialConsideration])
  @nestAccessControl.UseRoles({
    resource: "SpecialConsideration",
    action: "read",
    possession: "any",
  })
  async specialConsiderations(
    @graphql.Args() args: SpecialConsiderationFindManyArgs
  ): Promise<SpecialConsideration[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => SpecialConsideration, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "SpecialConsideration",
    action: "read",
    possession: "own",
  })
  async specialConsideration(
    @graphql.Args() args: SpecialConsiderationFindUniqueArgs
  ): Promise<SpecialConsideration | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SpecialConsideration)
  @nestAccessControl.UseRoles({
    resource: "SpecialConsideration",
    action: "create",
    possession: "any",
  })
  async createSpecialConsideration(
    @graphql.Args() args: CreateSpecialConsiderationArgs
  ): Promise<SpecialConsideration> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SpecialConsideration)
  @nestAccessControl.UseRoles({
    resource: "SpecialConsideration",
    action: "update",
    possession: "any",
  })
  async updateSpecialConsideration(
    @graphql.Args() args: UpdateSpecialConsiderationArgs
  ): Promise<SpecialConsideration | null> {
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

  @graphql.Mutation(() => SpecialConsideration)
  @nestAccessControl.UseRoles({
    resource: "SpecialConsideration",
    action: "delete",
    possession: "any",
  })
  async deleteSpecialConsideration(
    @graphql.Args() args: DeleteSpecialConsiderationArgs
  ): Promise<SpecialConsideration | null> {
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
