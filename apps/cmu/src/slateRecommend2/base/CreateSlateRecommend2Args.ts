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
import { SlateRecommend2CreateInput } from "./SlateRecommend2CreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateSlateRecommend2Args {
  @ApiProperty({
    required: true,
    type: () => SlateRecommend2CreateInput,
  })
  @ValidateNested()
  @Type(() => SlateRecommend2CreateInput)
  @Field(() => SlateRecommend2CreateInput, { nullable: false })
  data!: SlateRecommend2CreateInput;
}

export { CreateSlateRecommend2Args as CreateSlateRecommend2Args };
