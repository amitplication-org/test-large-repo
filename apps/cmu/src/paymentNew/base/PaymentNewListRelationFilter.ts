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
import { PaymentNewWhereInput } from "./PaymentNewWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PaymentNewListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PaymentNewWhereInput,
  })
  @ValidateNested()
  @Type(() => PaymentNewWhereInput)
  @IsOptional()
  @Field(() => PaymentNewWhereInput, {
    nullable: true,
  })
  every?: PaymentNewWhereInput;

  @ApiProperty({
    required: false,
    type: () => PaymentNewWhereInput,
  })
  @ValidateNested()
  @Type(() => PaymentNewWhereInput)
  @IsOptional()
  @Field(() => PaymentNewWhereInput, {
    nullable: true,
  })
  some?: PaymentNewWhereInput;

  @ApiProperty({
    required: false,
    type: () => PaymentNewWhereInput,
  })
  @ValidateNested()
  @Type(() => PaymentNewWhereInput)
  @IsOptional()
  @Field(() => PaymentNewWhereInput, {
    nullable: true,
  })
  none?: PaymentNewWhereInput;
}
export { PaymentNewListRelationFilter as PaymentNewListRelationFilter };
