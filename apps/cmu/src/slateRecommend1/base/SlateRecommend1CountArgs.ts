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
import { SlateRecommend1WhereInput } from "./SlateRecommend1WhereInput";
import { Type } from "class-transformer";

@ArgsType()
class SlateRecommend1CountArgs {
  @ApiProperty({
    required: false,
    type: () => SlateRecommend1WhereInput,
  })
  @Field(() => SlateRecommend1WhereInput, { nullable: true })
  @Type(() => SlateRecommend1WhereInput)
  where?: SlateRecommend1WhereInput;
}

export { SlateRecommend1CountArgs as SlateRecommend1CountArgs };
