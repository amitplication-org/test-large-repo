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
import { ApplicationWhereUniqueInput } from "../../application/base/ApplicationWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PeriodWhereUniqueInput } from "../../period/base/PeriodWhereUniqueInput";

@InputType()
class PeriodApplicationCreateInput {
  @ApiProperty({
    required: true,
    type: () => ApplicationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ApplicationWhereUniqueInput)
  @Field(() => ApplicationWhereUniqueInput)
  application!: ApplicationWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PeriodWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PeriodWhereUniqueInput)
  @Field(() => PeriodWhereUniqueInput)
  period!: PeriodWhereUniqueInput;
}

export { PeriodApplicationCreateInput as PeriodApplicationCreateInput };
