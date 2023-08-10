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
import { IsInt, IsOptional, IsNumber, IsDate, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumRegistrationFeePaymentPaymentStatus } from "./EnumRegistrationFeePaymentPaymentStatus";

@InputType()
class RegistrationFeePaymentUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  applicationId?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  departmentId?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  lastModUserId?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  paymentAmount?: number;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  paymentIntentDate?: Date;

  @ApiProperty({
    required: false,
    enum: EnumRegistrationFeePaymentPaymentStatus,
  })
  @IsEnum(EnumRegistrationFeePaymentPaymentStatus)
  @IsOptional()
  @Field(() => EnumRegistrationFeePaymentPaymentStatus, {
    nullable: true,
  })
  payment_status?: "pending" | "paid" | "refunded" | "void";

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  paymentType?: number;
}

export { RegistrationFeePaymentUpdateInput as RegistrationFeePaymentUpdateInput };
