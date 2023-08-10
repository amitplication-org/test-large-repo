/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsDate, IsNumber, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumRegistrationFeePaymentPaymentStatus } from "./EnumRegistrationFeePaymentPaymentStatus";

@ObjectType()
class RegistrationFeePayment {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  applicationId!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  departmentId!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  lastModTime!: Date;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  lastModUserId!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  paymentAmount!: number;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  paymentIntentDate!: Date;

  @ApiProperty({
    required: true,
    enum: EnumRegistrationFeePaymentPaymentStatus,
  })
  @IsEnum(EnumRegistrationFeePaymentPaymentStatus)
  @Field(() => EnumRegistrationFeePaymentPaymentStatus, {
    nullable: true,
  })
  payment_status?: "pending" | "paid" | "refunded" | "void";

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  paymentType!: number;
}

export { RegistrationFeePayment as RegistrationFeePayment };
