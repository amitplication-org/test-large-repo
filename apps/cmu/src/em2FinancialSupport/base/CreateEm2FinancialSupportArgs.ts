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
import { Em2FinancialSupportCreateInput } from "./Em2FinancialSupportCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateEm2FinancialSupportArgs {
  @ApiProperty({
    required: true,
    type: () => Em2FinancialSupportCreateInput,
  })
  @ValidateNested()
  @Type(() => Em2FinancialSupportCreateInput)
  @Field(() => Em2FinancialSupportCreateInput, { nullable: false })
  data!: Em2FinancialSupportCreateInput;
}

export { CreateEm2FinancialSupportArgs as CreateEm2FinancialSupportArgs };
