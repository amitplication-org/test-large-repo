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
import { MseInterviewWhereUniqueInput } from "./MseInterviewWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MseInterviewUpdateInput } from "./MseInterviewUpdateInput";

@ArgsType()
class UpdateMseInterviewArgs {
  @ApiProperty({
    required: true,
    type: () => MseInterviewWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MseInterviewWhereUniqueInput)
  @Field(() => MseInterviewWhereUniqueInput, { nullable: false })
  where!: MseInterviewWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => MseInterviewUpdateInput,
  })
  @ValidateNested()
  @Type(() => MseInterviewUpdateInput)
  @Field(() => MseInterviewUpdateInput, { nullable: false })
  data!: MseInterviewUpdateInput;
}

export { UpdateMseInterviewArgs as UpdateMseInterviewArgs };
