/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CashnetPaymentCopyWhereInput } from "./CashnetPaymentCopyWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CashnetPaymentCopyOrderByInput } from "./CashnetPaymentCopyOrderByInput";

@ArgsType()
class CashnetPaymentCopyFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CashnetPaymentCopyWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CashnetPaymentCopyWhereInput, { nullable: true })
  @Type(() => CashnetPaymentCopyWhereInput)
  where?: CashnetPaymentCopyWhereInput;

  @ApiProperty({
    required: false,
    type: [CashnetPaymentCopyOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CashnetPaymentCopyOrderByInput], { nullable: true })
  @Type(() => CashnetPaymentCopyOrderByInput)
  orderBy?: Array<CashnetPaymentCopyOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CashnetPaymentCopyFindManyArgs as CashnetPaymentCopyFindManyArgs };
