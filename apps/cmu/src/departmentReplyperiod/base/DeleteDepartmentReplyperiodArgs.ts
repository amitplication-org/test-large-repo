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
import { DepartmentReplyperiodWhereUniqueInput } from "./DepartmentReplyperiodWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteDepartmentReplyperiodArgs {
  @ApiProperty({
    required: true,
    type: () => DepartmentReplyperiodWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DepartmentReplyperiodWhereUniqueInput)
  @Field(() => DepartmentReplyperiodWhereUniqueInput, { nullable: false })
  where!: DepartmentReplyperiodWhereUniqueInput;
}

export { DeleteDepartmentReplyperiodArgs as DeleteDepartmentReplyperiodArgs };
