/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CategoryListRelationFilter } from "../../category/base/CategoryListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TransactionsListRelationFilter } from "../../transactions/base/TransactionsListRelationFilter";
import { WalletListRelationFilter } from "../../wallet/base/WalletListRelationFilter";

@InputType()
class UserWhereInput {
  @ApiProperty({
    required: false,
    type: () => CategoryListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CategoryListRelationFilter)
  @IsOptional()
  @Field(() => CategoryListRelationFilter, {
    nullable: true,
  })
  categories?: CategoryListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  firstName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  lastName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => TransactionsListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TransactionsListRelationFilter)
  @IsOptional()
  @Field(() => TransactionsListRelationFilter, {
    nullable: true,
  })
  transactionsItems?: TransactionsListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  username?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => WalletListRelationFilter,
  })
  @ValidateNested()
  @Type(() => WalletListRelationFilter)
  @IsOptional()
  @Field(() => WalletListRelationFilter, {
    nullable: true,
  })
  wallets?: WalletListRelationFilter;
}

export { UserWhereInput as UserWhereInput };
