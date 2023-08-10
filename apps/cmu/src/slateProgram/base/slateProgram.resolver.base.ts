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
import { CreateSlateProgramArgs } from "./CreateSlateProgramArgs";
import { UpdateSlateProgramArgs } from "./UpdateSlateProgramArgs";
import { DeleteSlateProgramArgs } from "./DeleteSlateProgramArgs";
import { SlateProgramCountArgs } from "./SlateProgramCountArgs";
import { SlateProgramFindManyArgs } from "./SlateProgramFindManyArgs";
import { SlateProgramFindUniqueArgs } from "./SlateProgramFindUniqueArgs";
import { SlateProgram } from "./SlateProgram";
import { SlateProgramService } from "../slateProgram.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SlateProgram)
export class SlateProgramResolverBase {
  constructor(
    protected readonly service: SlateProgramService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "SlateProgram",
    action: "read",
    possession: "any",
  })
  async _slateProgramsMeta(
    @graphql.Args() args: SlateProgramCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [SlateProgram])
  @nestAccessControl.UseRoles({
    resource: "SlateProgram",
    action: "read",
    possession: "any",
  })
  async slatePrograms(
    @graphql.Args() args: SlateProgramFindManyArgs
  ): Promise<SlateProgram[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => SlateProgram, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "SlateProgram",
    action: "read",
    possession: "own",
  })
  async slateProgram(
    @graphql.Args() args: SlateProgramFindUniqueArgs
  ): Promise<SlateProgram | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SlateProgram)
  @nestAccessControl.UseRoles({
    resource: "SlateProgram",
    action: "create",
    possession: "any",
  })
  async createSlateProgram(
    @graphql.Args() args: CreateSlateProgramArgs
  ): Promise<SlateProgram> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SlateProgram)
  @nestAccessControl.UseRoles({
    resource: "SlateProgram",
    action: "update",
    possession: "any",
  })
  async updateSlateProgram(
    @graphql.Args() args: UpdateSlateProgramArgs
  ): Promise<SlateProgram | null> {
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

  @graphql.Mutation(() => SlateProgram)
  @nestAccessControl.UseRoles({
    resource: "SlateProgram",
    action: "delete",
    possession: "any",
  })
  async deleteSlateProgram(
    @graphql.Args() args: DeleteSlateProgramArgs
  ): Promise<SlateProgram | null> {
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
