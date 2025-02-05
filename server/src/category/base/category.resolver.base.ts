/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Category } from "./Category";
import { CategoryCountArgs } from "./CategoryCountArgs";
import { CategoryFindManyArgs } from "./CategoryFindManyArgs";
import { CategoryFindUniqueArgs } from "./CategoryFindUniqueArgs";
import { CreateCategoryArgs } from "./CreateCategoryArgs";
import { UpdateCategoryArgs } from "./UpdateCategoryArgs";
import { DeleteCategoryArgs } from "./DeleteCategoryArgs";
import { TransactionsFindManyArgs } from "../../transactions/base/TransactionsFindManyArgs";
import { Transactions } from "../../transactions/base/Transactions";
import { User } from "../../user/base/User";
import { CategoryService } from "../category.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Category)
export class CategoryResolverBase {
  constructor(
    protected readonly service: CategoryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "read",
    possession: "any",
  })
  async _categoriesMeta(
    @graphql.Args() args: CategoryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Category])
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "read",
    possession: "any",
  })
  async categories(
    @graphql.Args() args: CategoryFindManyArgs
  ): Promise<Category[]> {
    return this.service.categories(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Category, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "read",
    possession: "own",
  })
  async category(
    @graphql.Args() args: CategoryFindUniqueArgs
  ): Promise<Category | null> {
    const result = await this.service.category(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Category)
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "create",
    possession: "any",
  })
  async createCategory(
    @graphql.Args() args: CreateCategoryArgs
  ): Promise<Category> {
    return await this.service.createCategory({
      ...args,
      data: {
        ...args.data,

        userId: args.data.userId
          ? {
              connect: args.data.userId,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Category)
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "update",
    possession: "any",
  })
  async updateCategory(
    @graphql.Args() args: UpdateCategoryArgs
  ): Promise<Category | null> {
    try {
      return await this.service.updateCategory({
        ...args,
        data: {
          ...args.data,

          userId: args.data.userId
            ? {
                connect: args.data.userId,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Category)
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "delete",
    possession: "any",
  })
  async deleteCategory(
    @graphql.Args() args: DeleteCategoryArgs
  ): Promise<Category | null> {
    try {
      return await this.service.deleteCategory(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Transactions], { name: "transactionsItems" })
  @nestAccessControl.UseRoles({
    resource: "Transactions",
    action: "read",
    possession: "any",
  })
  async findTransactionsItems(
    @graphql.Parent() parent: Category,
    @graphql.Args() args: TransactionsFindManyArgs
  ): Promise<Transactions[]> {
    const results = await this.service.findTransactionsItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "userId",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUserId(@graphql.Parent() parent: Category): Promise<User | null> {
    const result = await this.service.getUserId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
