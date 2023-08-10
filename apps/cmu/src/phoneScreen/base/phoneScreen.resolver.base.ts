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
import { CreatePhoneScreenArgs } from "./CreatePhoneScreenArgs";
import { UpdatePhoneScreenArgs } from "./UpdatePhoneScreenArgs";
import { DeletePhoneScreenArgs } from "./DeletePhoneScreenArgs";
import { PhoneScreenCountArgs } from "./PhoneScreenCountArgs";
import { PhoneScreenFindManyArgs } from "./PhoneScreenFindManyArgs";
import { PhoneScreenFindUniqueArgs } from "./PhoneScreenFindUniqueArgs";
import { PhoneScreen } from "./PhoneScreen";
import { PhoneScreenService } from "../phoneScreen.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PhoneScreen)
export class PhoneScreenResolverBase {
  constructor(
    protected readonly service: PhoneScreenService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PhoneScreen",
    action: "read",
    possession: "any",
  })
  async _phoneScreensMeta(
    @graphql.Args() args: PhoneScreenCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [PhoneScreen])
  @nestAccessControl.UseRoles({
    resource: "PhoneScreen",
    action: "read",
    possession: "any",
  })
  async phoneScreens(
    @graphql.Args() args: PhoneScreenFindManyArgs
  ): Promise<PhoneScreen[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PhoneScreen, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PhoneScreen",
    action: "read",
    possession: "own",
  })
  async phoneScreen(
    @graphql.Args() args: PhoneScreenFindUniqueArgs
  ): Promise<PhoneScreen | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PhoneScreen)
  @nestAccessControl.UseRoles({
    resource: "PhoneScreen",
    action: "create",
    possession: "any",
  })
  async createPhoneScreen(
    @graphql.Args() args: CreatePhoneScreenArgs
  ): Promise<PhoneScreen> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PhoneScreen)
  @nestAccessControl.UseRoles({
    resource: "PhoneScreen",
    action: "update",
    possession: "any",
  })
  async updatePhoneScreen(
    @graphql.Args() args: UpdatePhoneScreenArgs
  ): Promise<PhoneScreen | null> {
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

  @graphql.Mutation(() => PhoneScreen)
  @nestAccessControl.UseRoles({
    resource: "PhoneScreen",
    action: "delete",
    possession: "any",
  })
  async deletePhoneScreen(
    @graphql.Args() args: DeletePhoneScreenArgs
  ): Promise<PhoneScreen | null> {
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
