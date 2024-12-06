/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { CategoryService } from "../category.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CategoryCreateInput } from "./CategoryCreateInput";
import { Category } from "./Category";
import { CategoryFindManyArgs } from "./CategoryFindManyArgs";
import { CategoryWhereUniqueInput } from "./CategoryWhereUniqueInput";
import { CategoryUpdateInput } from "./CategoryUpdateInput";
import { TransactionsFindManyArgs } from "../../transactions/base/TransactionsFindManyArgs";
import { Transactions } from "../../transactions/base/Transactions";
import { TransactionsWhereUniqueInput } from "../../transactions/base/TransactionsWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CategoryControllerBase {
  constructor(
    protected readonly service: CategoryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Category })
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createCategory(
    @common.Body() data: CategoryCreateInput
  ): Promise<Category> {
    return await this.service.createCategory({
      data: {
        ...data,

        userId: data.userId
          ? {
              connect: data.userId,
            }
          : undefined,
      },
      select: {
        color: true,
        createdAt: true,
        description: true,
        icon: true,
        id: true,
        name: true,
        typeField: true,
        updatedAt: true,

        userId: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Category] })
  @ApiNestedQuery(CategoryFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async categories(@common.Req() request: Request): Promise<Category[]> {
    const args = plainToClass(CategoryFindManyArgs, request.query);
    return this.service.categories({
      ...args,
      select: {
        color: true,
        createdAt: true,
        description: true,
        icon: true,
        id: true,
        name: true,
        typeField: true,
        updatedAt: true,

        userId: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Category })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async category(
    @common.Param() params: CategoryWhereUniqueInput
  ): Promise<Category | null> {
    const result = await this.service.category({
      where: params,
      select: {
        color: true,
        createdAt: true,
        description: true,
        icon: true,
        id: true,
        name: true,
        typeField: true,
        updatedAt: true,

        userId: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Category })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateCategory(
    @common.Param() params: CategoryWhereUniqueInput,
    @common.Body() data: CategoryUpdateInput
  ): Promise<Category | null> {
    try {
      return await this.service.updateCategory({
        where: params,
        data: {
          ...data,

          userId: data.userId
            ? {
                connect: data.userId,
              }
            : undefined,
        },
        select: {
          color: true,
          createdAt: true,
          description: true,
          icon: true,
          id: true,
          name: true,
          typeField: true,
          updatedAt: true,

          userId: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Category })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCategory(
    @common.Param() params: CategoryWhereUniqueInput
  ): Promise<Category | null> {
    try {
      return await this.service.deleteCategory({
        where: params,
        select: {
          color: true,
          createdAt: true,
          description: true,
          icon: true,
          id: true,
          name: true,
          typeField: true,
          updatedAt: true,

          userId: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/transactionsItems")
  @ApiNestedQuery(TransactionsFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Transactions",
    action: "read",
    possession: "any",
  })
  async findTransactionsItems(
    @common.Req() request: Request,
    @common.Param() params: CategoryWhereUniqueInput
  ): Promise<Transactions[]> {
    const query = plainToClass(TransactionsFindManyArgs, request.query);
    const results = await this.service.findTransactionsItems(params.id, {
      ...query,
      select: {
        amount: true,

        categoryId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        date: true,
        description: true,
        id: true,
        updatedAt: true,

        userId: {
          select: {
            id: true,
          },
        },

        walletId: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/transactionsItems")
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "update",
    possession: "any",
  })
  async connectTransactionsItems(
    @common.Param() params: CategoryWhereUniqueInput,
    @common.Body() body: TransactionsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactionsItems: {
        connect: body,
      },
    };
    await this.service.updateCategory({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/transactionsItems")
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "update",
    possession: "any",
  })
  async updateTransactionsItems(
    @common.Param() params: CategoryWhereUniqueInput,
    @common.Body() body: TransactionsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactionsItems: {
        set: body,
      },
    };
    await this.service.updateCategory({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/transactionsItems")
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "update",
    possession: "any",
  })
  async disconnectTransactionsItems(
    @common.Param() params: CategoryWhereUniqueInput,
    @common.Body() body: TransactionsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactionsItems: {
        disconnect: body,
      },
    };
    await this.service.updateCategory({
      where: params,
      data,
      select: { id: true },
    });
  }
}
