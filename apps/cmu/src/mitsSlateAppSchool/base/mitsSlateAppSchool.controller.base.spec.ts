import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { MitsSlateAppSchoolController } from "../mitsSlateAppSchool.controller";
import { MitsSlateAppSchoolService } from "../mitsSlateAppSchool.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  first: "exampleFirst",
  id: "exampleId",
  last: "exampleLast",
  middle: "exampleMiddle",
  prefix: "examplePrefix",
  school1Awards: "exampleSchool1Awards",
  school1City: "exampleSchool1City",
  school1ClassRankNumeric: "exampleSchool1ClassRankNumeric",
  school1ClassRankXOutOfY: "exampleSchool1ClassRankXOutOfY",
  school1ClassSizeNumeric: "exampleSchool1ClassSizeNumeric",
  school1Code: "exampleSchool1Code",
  school1Confirmed: "exampleSchool1Confirmed",
  school1Country: "exampleSchool1Country",
  school1Created: "exampleSchool1Created",
  school1Degree: "exampleSchool1Degree",
  school1DegreeConferred: "exampleSchool1DegreeConferred",
  school1Field: "exampleSchool1Field",
  school1From: "exampleSchool1From",
  school1Gpa: "exampleSchool1Gpa",
  school1GpaConverted: "exampleSchool1GpaConverted",
  school1GpaRecalculated: "exampleSchool1GpaRecalculated",
  school1GpaScale: "exampleSchool1GpaScale",
  school1Honors: "exampleSchool1Honors",
  school1Hours: "exampleSchool1Hours",
  school1Institution: "exampleSchool1Institution",
  school1Language: "exampleSchool1Language",
  school1Major: "exampleSchool1Major",
  school1Major1: "exampleSchool1Major1",
  school1Major2: "exampleSchool1Major2",
  school1Minor: "exampleSchool1Minor",
  school1Region: "exampleSchool1Region",
  school1To: "exampleSchool1To",
  school1Type: "exampleSchool1Type",
  school1Updated: "exampleSchool1Updated",
  school1Website: "exampleSchool1Website",
  school2Awards: "exampleSchool2Awards",
  school2City: "exampleSchool2City",
  school2ClassRankNumeric: "exampleSchool2ClassRankNumeric",
  school2ClassRankXOutOfY: "exampleSchool2ClassRankXOutOfY",
  school2ClassSizeNumeric: "exampleSchool2ClassSizeNumeric",
  school2Code: "exampleSchool2Code",
  school2Confirmed: "exampleSchool2Confirmed",
  school2Country: "exampleSchool2Country",
  school2Created: "exampleSchool2Created",
  school2Degree: "exampleSchool2Degree",
  school2DegreeConferred: "exampleSchool2DegreeConferred",
  school2Field: "exampleSchool2Field",
  school2From: "exampleSchool2From",
  school2Gpa: "exampleSchool2Gpa",
  school2GpaConverted: "exampleSchool2GpaConverted",
  school2GpaRecalculated: "exampleSchool2GpaRecalculated",
  school2GpaScale: "exampleSchool2GpaScale",
  school2Honors: "exampleSchool2Honors",
  school2Hours: "exampleSchool2Hours",
  school2Institution: "exampleSchool2Institution",
  school2Language: "exampleSchool2Language",
  school2Major: "exampleSchool2Major",
  school2Major1: "exampleSchool2Major1",
  school2Major2: "exampleSchool2Major2",
  school2Minor: "exampleSchool2Minor",
  school2Region: "exampleSchool2Region",
  school2To: "exampleSchool2To",
  school2Type: "exampleSchool2Type",
  school2Updated: "exampleSchool2Updated",
  school2Website: "exampleSchool2Website",
  school3Awards: "exampleSchool3Awards",
  school3City: "exampleSchool3City",
  school3ClassRankNumeric: "exampleSchool3ClassRankNumeric",
  school3ClassRankXOutOfY: "exampleSchool3ClassRankXOutOfY",
  school3ClassSizeNumeric: "exampleSchool3ClassSizeNumeric",
  school3Code: "exampleSchool3Code",
  school3Confirmed: "exampleSchool3Confirmed",
  school3Country: "exampleSchool3Country",
  school3Created: "exampleSchool3Created",
  school3Degree: "exampleSchool3Degree",
  school3DegreeConferred: "exampleSchool3DegreeConferred",
  school3Field: "exampleSchool3Field",
  school3From: "exampleSchool3From",
  school3Gpa: "exampleSchool3Gpa",
  school3GpaConverted: "exampleSchool3GpaConverted",
  school3GpaRecalculated: "exampleSchool3GpaRecalculated",
  school3GpaScale: "exampleSchool3GpaScale",
  school3Honors: "exampleSchool3Honors",
  school3Hours: "exampleSchool3Hours",
  school3Institution: "exampleSchool3Institution",
  school3Language: "exampleSchool3Language",
  school3Major: "exampleSchool3Major",
  school3Major1: "exampleSchool3Major1",
  school3Major2: "exampleSchool3Major2",
  school3Minor: "exampleSchool3Minor",
  school3Region: "exampleSchool3Region",
  school3To: "exampleSchool3To",
  school3Type: "exampleSchool3Type",
  school3Updated: "exampleSchool3Updated",
  school3Website: "exampleSchool3Website",
  school4Awards: "exampleSchool4Awards",
  school4City: "exampleSchool4City",
  school4ClassRankNumeric: "exampleSchool4ClassRankNumeric",
  school4ClassRankXOutOfY: "exampleSchool4ClassRankXOutOfY",
  school4ClassSizeNumeric: "exampleSchool4ClassSizeNumeric",
  school4Code: "exampleSchool4Code",
  school4Confirmed: "exampleSchool4Confirmed",
  school4Country: "exampleSchool4Country",
  school4Created: "exampleSchool4Created",
  school4Degree: "exampleSchool4Degree",
  school4DegreeConferred: "exampleSchool4DegreeConferred",
  school4Field: "exampleSchool4Field",
  school4From: "exampleSchool4From",
  school4Gpa: "exampleSchool4Gpa",
  school4GpaConverted: "exampleSchool4GpaConverted",
  school4GpaRecalculated: "exampleSchool4GpaRecalculated",
  school4GpaScale: "exampleSchool4GpaScale",
  school4Honors: "exampleSchool4Honors",
  school4Hours: "exampleSchool4Hours",
  school4Institution: "exampleSchool4Institution",
  school4Language: "exampleSchool4Language",
  school4Major: "exampleSchool4Major",
  school4Major1: "exampleSchool4Major1",
  school4Major2: "exampleSchool4Major2",
  school4Minor: "exampleSchool4Minor",
  school4Region: "exampleSchool4Region",
  school4To: "exampleSchool4To",
  school4Type: "exampleSchool4Type",
  school4Updated: "exampleSchool4Updated",
  school4Website: "exampleSchool4Website",
  school5Awards: "exampleSchool5Awards",
  school5City: "exampleSchool5City",
  school5ClassRankNumeric: "exampleSchool5ClassRankNumeric",
  school5ClassRankXOutOfY: "exampleSchool5ClassRankXOutOfY",
  school5ClassSizeNumeric: "exampleSchool5ClassSizeNumeric",
  school5Code: "exampleSchool5Code",
  school5Confirmed: "exampleSchool5Confirmed",
  school5Country: "exampleSchool5Country",
  school5Created: "exampleSchool5Created",
  school5Degree: "exampleSchool5Degree",
  school5DegreeConferred: "exampleSchool5DegreeConferred",
  school5Field: "exampleSchool5Field",
  school5From: "exampleSchool5From",
  school5Gpa: "exampleSchool5Gpa",
  school5GpaConverted: "exampleSchool5GpaConverted",
  school5GpaRecalculated: "exampleSchool5GpaRecalculated",
  school5GpaScale: "exampleSchool5GpaScale",
  school5Honors: "exampleSchool5Honors",
  school5Hours: "exampleSchool5Hours",
  school5Institution: "exampleSchool5Institution",
  school5Language: "exampleSchool5Language",
  school5Major: "exampleSchool5Major",
  school5Major1: "exampleSchool5Major1",
  school5Major2: "exampleSchool5Major2",
  school5Minor: "exampleSchool5Minor",
  school5Region: "exampleSchool5Region",
  school5To: "exampleSchool5To",
  school5Type: "exampleSchool5Type",
  school5Updated: "exampleSchool5Updated",
  school5Website: "exampleSchool5Website",
  schoolNum1NumberOfActiveApplications:
    "exampleSchoolNum1NumberOfActiveApplications",
  schoolNum1Priority: "exampleSchoolNum1Priority",
  schoolNum2Priority: "exampleSchoolNum2Priority",
  schoolNum3Priority: "exampleSchoolNum3Priority",
  schoolNum4Priority: "exampleSchoolNum4Priority",
  schoolNum5Priority: "exampleSchoolNum5Priority",
};
const CREATE_RESULT = {
  first: "exampleFirst",
  id: "exampleId",
  last: "exampleLast",
  middle: "exampleMiddle",
  prefix: "examplePrefix",
  school1Awards: "exampleSchool1Awards",
  school1City: "exampleSchool1City",
  school1ClassRankNumeric: "exampleSchool1ClassRankNumeric",
  school1ClassRankXOutOfY: "exampleSchool1ClassRankXOutOfY",
  school1ClassSizeNumeric: "exampleSchool1ClassSizeNumeric",
  school1Code: "exampleSchool1Code",
  school1Confirmed: "exampleSchool1Confirmed",
  school1Country: "exampleSchool1Country",
  school1Created: "exampleSchool1Created",
  school1Degree: "exampleSchool1Degree",
  school1DegreeConferred: "exampleSchool1DegreeConferred",
  school1Field: "exampleSchool1Field",
  school1From: "exampleSchool1From",
  school1Gpa: "exampleSchool1Gpa",
  school1GpaConverted: "exampleSchool1GpaConverted",
  school1GpaRecalculated: "exampleSchool1GpaRecalculated",
  school1GpaScale: "exampleSchool1GpaScale",
  school1Honors: "exampleSchool1Honors",
  school1Hours: "exampleSchool1Hours",
  school1Institution: "exampleSchool1Institution",
  school1Language: "exampleSchool1Language",
  school1Major: "exampleSchool1Major",
  school1Major1: "exampleSchool1Major1",
  school1Major2: "exampleSchool1Major2",
  school1Minor: "exampleSchool1Minor",
  school1Region: "exampleSchool1Region",
  school1To: "exampleSchool1To",
  school1Type: "exampleSchool1Type",
  school1Updated: "exampleSchool1Updated",
  school1Website: "exampleSchool1Website",
  school2Awards: "exampleSchool2Awards",
  school2City: "exampleSchool2City",
  school2ClassRankNumeric: "exampleSchool2ClassRankNumeric",
  school2ClassRankXOutOfY: "exampleSchool2ClassRankXOutOfY",
  school2ClassSizeNumeric: "exampleSchool2ClassSizeNumeric",
  school2Code: "exampleSchool2Code",
  school2Confirmed: "exampleSchool2Confirmed",
  school2Country: "exampleSchool2Country",
  school2Created: "exampleSchool2Created",
  school2Degree: "exampleSchool2Degree",
  school2DegreeConferred: "exampleSchool2DegreeConferred",
  school2Field: "exampleSchool2Field",
  school2From: "exampleSchool2From",
  school2Gpa: "exampleSchool2Gpa",
  school2GpaConverted: "exampleSchool2GpaConverted",
  school2GpaRecalculated: "exampleSchool2GpaRecalculated",
  school2GpaScale: "exampleSchool2GpaScale",
  school2Honors: "exampleSchool2Honors",
  school2Hours: "exampleSchool2Hours",
  school2Institution: "exampleSchool2Institution",
  school2Language: "exampleSchool2Language",
  school2Major: "exampleSchool2Major",
  school2Major1: "exampleSchool2Major1",
  school2Major2: "exampleSchool2Major2",
  school2Minor: "exampleSchool2Minor",
  school2Region: "exampleSchool2Region",
  school2To: "exampleSchool2To",
  school2Type: "exampleSchool2Type",
  school2Updated: "exampleSchool2Updated",
  school2Website: "exampleSchool2Website",
  school3Awards: "exampleSchool3Awards",
  school3City: "exampleSchool3City",
  school3ClassRankNumeric: "exampleSchool3ClassRankNumeric",
  school3ClassRankXOutOfY: "exampleSchool3ClassRankXOutOfY",
  school3ClassSizeNumeric: "exampleSchool3ClassSizeNumeric",
  school3Code: "exampleSchool3Code",
  school3Confirmed: "exampleSchool3Confirmed",
  school3Country: "exampleSchool3Country",
  school3Created: "exampleSchool3Created",
  school3Degree: "exampleSchool3Degree",
  school3DegreeConferred: "exampleSchool3DegreeConferred",
  school3Field: "exampleSchool3Field",
  school3From: "exampleSchool3From",
  school3Gpa: "exampleSchool3Gpa",
  school3GpaConverted: "exampleSchool3GpaConverted",
  school3GpaRecalculated: "exampleSchool3GpaRecalculated",
  school3GpaScale: "exampleSchool3GpaScale",
  school3Honors: "exampleSchool3Honors",
  school3Hours: "exampleSchool3Hours",
  school3Institution: "exampleSchool3Institution",
  school3Language: "exampleSchool3Language",
  school3Major: "exampleSchool3Major",
  school3Major1: "exampleSchool3Major1",
  school3Major2: "exampleSchool3Major2",
  school3Minor: "exampleSchool3Minor",
  school3Region: "exampleSchool3Region",
  school3To: "exampleSchool3To",
  school3Type: "exampleSchool3Type",
  school3Updated: "exampleSchool3Updated",
  school3Website: "exampleSchool3Website",
  school4Awards: "exampleSchool4Awards",
  school4City: "exampleSchool4City",
  school4ClassRankNumeric: "exampleSchool4ClassRankNumeric",
  school4ClassRankXOutOfY: "exampleSchool4ClassRankXOutOfY",
  school4ClassSizeNumeric: "exampleSchool4ClassSizeNumeric",
  school4Code: "exampleSchool4Code",
  school4Confirmed: "exampleSchool4Confirmed",
  school4Country: "exampleSchool4Country",
  school4Created: "exampleSchool4Created",
  school4Degree: "exampleSchool4Degree",
  school4DegreeConferred: "exampleSchool4DegreeConferred",
  school4Field: "exampleSchool4Field",
  school4From: "exampleSchool4From",
  school4Gpa: "exampleSchool4Gpa",
  school4GpaConverted: "exampleSchool4GpaConverted",
  school4GpaRecalculated: "exampleSchool4GpaRecalculated",
  school4GpaScale: "exampleSchool4GpaScale",
  school4Honors: "exampleSchool4Honors",
  school4Hours: "exampleSchool4Hours",
  school4Institution: "exampleSchool4Institution",
  school4Language: "exampleSchool4Language",
  school4Major: "exampleSchool4Major",
  school4Major1: "exampleSchool4Major1",
  school4Major2: "exampleSchool4Major2",
  school4Minor: "exampleSchool4Minor",
  school4Region: "exampleSchool4Region",
  school4To: "exampleSchool4To",
  school4Type: "exampleSchool4Type",
  school4Updated: "exampleSchool4Updated",
  school4Website: "exampleSchool4Website",
  school5Awards: "exampleSchool5Awards",
  school5City: "exampleSchool5City",
  school5ClassRankNumeric: "exampleSchool5ClassRankNumeric",
  school5ClassRankXOutOfY: "exampleSchool5ClassRankXOutOfY",
  school5ClassSizeNumeric: "exampleSchool5ClassSizeNumeric",
  school5Code: "exampleSchool5Code",
  school5Confirmed: "exampleSchool5Confirmed",
  school5Country: "exampleSchool5Country",
  school5Created: "exampleSchool5Created",
  school5Degree: "exampleSchool5Degree",
  school5DegreeConferred: "exampleSchool5DegreeConferred",
  school5Field: "exampleSchool5Field",
  school5From: "exampleSchool5From",
  school5Gpa: "exampleSchool5Gpa",
  school5GpaConverted: "exampleSchool5GpaConverted",
  school5GpaRecalculated: "exampleSchool5GpaRecalculated",
  school5GpaScale: "exampleSchool5GpaScale",
  school5Honors: "exampleSchool5Honors",
  school5Hours: "exampleSchool5Hours",
  school5Institution: "exampleSchool5Institution",
  school5Language: "exampleSchool5Language",
  school5Major: "exampleSchool5Major",
  school5Major1: "exampleSchool5Major1",
  school5Major2: "exampleSchool5Major2",
  school5Minor: "exampleSchool5Minor",
  school5Region: "exampleSchool5Region",
  school5To: "exampleSchool5To",
  school5Type: "exampleSchool5Type",
  school5Updated: "exampleSchool5Updated",
  school5Website: "exampleSchool5Website",
  schoolNum1NumberOfActiveApplications:
    "exampleSchoolNum1NumberOfActiveApplications",
  schoolNum1Priority: "exampleSchoolNum1Priority",
  schoolNum2Priority: "exampleSchoolNum2Priority",
  schoolNum3Priority: "exampleSchoolNum3Priority",
  schoolNum4Priority: "exampleSchoolNum4Priority",
  schoolNum5Priority: "exampleSchoolNum5Priority",
};
const FIND_MANY_RESULT = [
  {
    first: "exampleFirst",
    id: "exampleId",
    last: "exampleLast",
    middle: "exampleMiddle",
    prefix: "examplePrefix",
    school1Awards: "exampleSchool1Awards",
    school1City: "exampleSchool1City",
    school1ClassRankNumeric: "exampleSchool1ClassRankNumeric",
    school1ClassRankXOutOfY: "exampleSchool1ClassRankXOutOfY",
    school1ClassSizeNumeric: "exampleSchool1ClassSizeNumeric",
    school1Code: "exampleSchool1Code",
    school1Confirmed: "exampleSchool1Confirmed",
    school1Country: "exampleSchool1Country",
    school1Created: "exampleSchool1Created",
    school1Degree: "exampleSchool1Degree",
    school1DegreeConferred: "exampleSchool1DegreeConferred",
    school1Field: "exampleSchool1Field",
    school1From: "exampleSchool1From",
    school1Gpa: "exampleSchool1Gpa",
    school1GpaConverted: "exampleSchool1GpaConverted",
    school1GpaRecalculated: "exampleSchool1GpaRecalculated",
    school1GpaScale: "exampleSchool1GpaScale",
    school1Honors: "exampleSchool1Honors",
    school1Hours: "exampleSchool1Hours",
    school1Institution: "exampleSchool1Institution",
    school1Language: "exampleSchool1Language",
    school1Major: "exampleSchool1Major",
    school1Major1: "exampleSchool1Major1",
    school1Major2: "exampleSchool1Major2",
    school1Minor: "exampleSchool1Minor",
    school1Region: "exampleSchool1Region",
    school1To: "exampleSchool1To",
    school1Type: "exampleSchool1Type",
    school1Updated: "exampleSchool1Updated",
    school1Website: "exampleSchool1Website",
    school2Awards: "exampleSchool2Awards",
    school2City: "exampleSchool2City",
    school2ClassRankNumeric: "exampleSchool2ClassRankNumeric",
    school2ClassRankXOutOfY: "exampleSchool2ClassRankXOutOfY",
    school2ClassSizeNumeric: "exampleSchool2ClassSizeNumeric",
    school2Code: "exampleSchool2Code",
    school2Confirmed: "exampleSchool2Confirmed",
    school2Country: "exampleSchool2Country",
    school2Created: "exampleSchool2Created",
    school2Degree: "exampleSchool2Degree",
    school2DegreeConferred: "exampleSchool2DegreeConferred",
    school2Field: "exampleSchool2Field",
    school2From: "exampleSchool2From",
    school2Gpa: "exampleSchool2Gpa",
    school2GpaConverted: "exampleSchool2GpaConverted",
    school2GpaRecalculated: "exampleSchool2GpaRecalculated",
    school2GpaScale: "exampleSchool2GpaScale",
    school2Honors: "exampleSchool2Honors",
    school2Hours: "exampleSchool2Hours",
    school2Institution: "exampleSchool2Institution",
    school2Language: "exampleSchool2Language",
    school2Major: "exampleSchool2Major",
    school2Major1: "exampleSchool2Major1",
    school2Major2: "exampleSchool2Major2",
    school2Minor: "exampleSchool2Minor",
    school2Region: "exampleSchool2Region",
    school2To: "exampleSchool2To",
    school2Type: "exampleSchool2Type",
    school2Updated: "exampleSchool2Updated",
    school2Website: "exampleSchool2Website",
    school3Awards: "exampleSchool3Awards",
    school3City: "exampleSchool3City",
    school3ClassRankNumeric: "exampleSchool3ClassRankNumeric",
    school3ClassRankXOutOfY: "exampleSchool3ClassRankXOutOfY",
    school3ClassSizeNumeric: "exampleSchool3ClassSizeNumeric",
    school3Code: "exampleSchool3Code",
    school3Confirmed: "exampleSchool3Confirmed",
    school3Country: "exampleSchool3Country",
    school3Created: "exampleSchool3Created",
    school3Degree: "exampleSchool3Degree",
    school3DegreeConferred: "exampleSchool3DegreeConferred",
    school3Field: "exampleSchool3Field",
    school3From: "exampleSchool3From",
    school3Gpa: "exampleSchool3Gpa",
    school3GpaConverted: "exampleSchool3GpaConverted",
    school3GpaRecalculated: "exampleSchool3GpaRecalculated",
    school3GpaScale: "exampleSchool3GpaScale",
    school3Honors: "exampleSchool3Honors",
    school3Hours: "exampleSchool3Hours",
    school3Institution: "exampleSchool3Institution",
    school3Language: "exampleSchool3Language",
    school3Major: "exampleSchool3Major",
    school3Major1: "exampleSchool3Major1",
    school3Major2: "exampleSchool3Major2",
    school3Minor: "exampleSchool3Minor",
    school3Region: "exampleSchool3Region",
    school3To: "exampleSchool3To",
    school3Type: "exampleSchool3Type",
    school3Updated: "exampleSchool3Updated",
    school3Website: "exampleSchool3Website",
    school4Awards: "exampleSchool4Awards",
    school4City: "exampleSchool4City",
    school4ClassRankNumeric: "exampleSchool4ClassRankNumeric",
    school4ClassRankXOutOfY: "exampleSchool4ClassRankXOutOfY",
    school4ClassSizeNumeric: "exampleSchool4ClassSizeNumeric",
    school4Code: "exampleSchool4Code",
    school4Confirmed: "exampleSchool4Confirmed",
    school4Country: "exampleSchool4Country",
    school4Created: "exampleSchool4Created",
    school4Degree: "exampleSchool4Degree",
    school4DegreeConferred: "exampleSchool4DegreeConferred",
    school4Field: "exampleSchool4Field",
    school4From: "exampleSchool4From",
    school4Gpa: "exampleSchool4Gpa",
    school4GpaConverted: "exampleSchool4GpaConverted",
    school4GpaRecalculated: "exampleSchool4GpaRecalculated",
    school4GpaScale: "exampleSchool4GpaScale",
    school4Honors: "exampleSchool4Honors",
    school4Hours: "exampleSchool4Hours",
    school4Institution: "exampleSchool4Institution",
    school4Language: "exampleSchool4Language",
    school4Major: "exampleSchool4Major",
    school4Major1: "exampleSchool4Major1",
    school4Major2: "exampleSchool4Major2",
    school4Minor: "exampleSchool4Minor",
    school4Region: "exampleSchool4Region",
    school4To: "exampleSchool4To",
    school4Type: "exampleSchool4Type",
    school4Updated: "exampleSchool4Updated",
    school4Website: "exampleSchool4Website",
    school5Awards: "exampleSchool5Awards",
    school5City: "exampleSchool5City",
    school5ClassRankNumeric: "exampleSchool5ClassRankNumeric",
    school5ClassRankXOutOfY: "exampleSchool5ClassRankXOutOfY",
    school5ClassSizeNumeric: "exampleSchool5ClassSizeNumeric",
    school5Code: "exampleSchool5Code",
    school5Confirmed: "exampleSchool5Confirmed",
    school5Country: "exampleSchool5Country",
    school5Created: "exampleSchool5Created",
    school5Degree: "exampleSchool5Degree",
    school5DegreeConferred: "exampleSchool5DegreeConferred",
    school5Field: "exampleSchool5Field",
    school5From: "exampleSchool5From",
    school5Gpa: "exampleSchool5Gpa",
    school5GpaConverted: "exampleSchool5GpaConverted",
    school5GpaRecalculated: "exampleSchool5GpaRecalculated",
    school5GpaScale: "exampleSchool5GpaScale",
    school5Honors: "exampleSchool5Honors",
    school5Hours: "exampleSchool5Hours",
    school5Institution: "exampleSchool5Institution",
    school5Language: "exampleSchool5Language",
    school5Major: "exampleSchool5Major",
    school5Major1: "exampleSchool5Major1",
    school5Major2: "exampleSchool5Major2",
    school5Minor: "exampleSchool5Minor",
    school5Region: "exampleSchool5Region",
    school5To: "exampleSchool5To",
    school5Type: "exampleSchool5Type",
    school5Updated: "exampleSchool5Updated",
    school5Website: "exampleSchool5Website",
    schoolNum1NumberOfActiveApplications:
      "exampleSchoolNum1NumberOfActiveApplications",
    schoolNum1Priority: "exampleSchoolNum1Priority",
    schoolNum2Priority: "exampleSchoolNum2Priority",
    schoolNum3Priority: "exampleSchoolNum3Priority",
    schoolNum4Priority: "exampleSchoolNum4Priority",
    schoolNum5Priority: "exampleSchoolNum5Priority",
  },
];
const FIND_ONE_RESULT = {
  first: "exampleFirst",
  id: "exampleId",
  last: "exampleLast",
  middle: "exampleMiddle",
  prefix: "examplePrefix",
  school1Awards: "exampleSchool1Awards",
  school1City: "exampleSchool1City",
  school1ClassRankNumeric: "exampleSchool1ClassRankNumeric",
  school1ClassRankXOutOfY: "exampleSchool1ClassRankXOutOfY",
  school1ClassSizeNumeric: "exampleSchool1ClassSizeNumeric",
  school1Code: "exampleSchool1Code",
  school1Confirmed: "exampleSchool1Confirmed",
  school1Country: "exampleSchool1Country",
  school1Created: "exampleSchool1Created",
  school1Degree: "exampleSchool1Degree",
  school1DegreeConferred: "exampleSchool1DegreeConferred",
  school1Field: "exampleSchool1Field",
  school1From: "exampleSchool1From",
  school1Gpa: "exampleSchool1Gpa",
  school1GpaConverted: "exampleSchool1GpaConverted",
  school1GpaRecalculated: "exampleSchool1GpaRecalculated",
  school1GpaScale: "exampleSchool1GpaScale",
  school1Honors: "exampleSchool1Honors",
  school1Hours: "exampleSchool1Hours",
  school1Institution: "exampleSchool1Institution",
  school1Language: "exampleSchool1Language",
  school1Major: "exampleSchool1Major",
  school1Major1: "exampleSchool1Major1",
  school1Major2: "exampleSchool1Major2",
  school1Minor: "exampleSchool1Minor",
  school1Region: "exampleSchool1Region",
  school1To: "exampleSchool1To",
  school1Type: "exampleSchool1Type",
  school1Updated: "exampleSchool1Updated",
  school1Website: "exampleSchool1Website",
  school2Awards: "exampleSchool2Awards",
  school2City: "exampleSchool2City",
  school2ClassRankNumeric: "exampleSchool2ClassRankNumeric",
  school2ClassRankXOutOfY: "exampleSchool2ClassRankXOutOfY",
  school2ClassSizeNumeric: "exampleSchool2ClassSizeNumeric",
  school2Code: "exampleSchool2Code",
  school2Confirmed: "exampleSchool2Confirmed",
  school2Country: "exampleSchool2Country",
  school2Created: "exampleSchool2Created",
  school2Degree: "exampleSchool2Degree",
  school2DegreeConferred: "exampleSchool2DegreeConferred",
  school2Field: "exampleSchool2Field",
  school2From: "exampleSchool2From",
  school2Gpa: "exampleSchool2Gpa",
  school2GpaConverted: "exampleSchool2GpaConverted",
  school2GpaRecalculated: "exampleSchool2GpaRecalculated",
  school2GpaScale: "exampleSchool2GpaScale",
  school2Honors: "exampleSchool2Honors",
  school2Hours: "exampleSchool2Hours",
  school2Institution: "exampleSchool2Institution",
  school2Language: "exampleSchool2Language",
  school2Major: "exampleSchool2Major",
  school2Major1: "exampleSchool2Major1",
  school2Major2: "exampleSchool2Major2",
  school2Minor: "exampleSchool2Minor",
  school2Region: "exampleSchool2Region",
  school2To: "exampleSchool2To",
  school2Type: "exampleSchool2Type",
  school2Updated: "exampleSchool2Updated",
  school2Website: "exampleSchool2Website",
  school3Awards: "exampleSchool3Awards",
  school3City: "exampleSchool3City",
  school3ClassRankNumeric: "exampleSchool3ClassRankNumeric",
  school3ClassRankXOutOfY: "exampleSchool3ClassRankXOutOfY",
  school3ClassSizeNumeric: "exampleSchool3ClassSizeNumeric",
  school3Code: "exampleSchool3Code",
  school3Confirmed: "exampleSchool3Confirmed",
  school3Country: "exampleSchool3Country",
  school3Created: "exampleSchool3Created",
  school3Degree: "exampleSchool3Degree",
  school3DegreeConferred: "exampleSchool3DegreeConferred",
  school3Field: "exampleSchool3Field",
  school3From: "exampleSchool3From",
  school3Gpa: "exampleSchool3Gpa",
  school3GpaConverted: "exampleSchool3GpaConverted",
  school3GpaRecalculated: "exampleSchool3GpaRecalculated",
  school3GpaScale: "exampleSchool3GpaScale",
  school3Honors: "exampleSchool3Honors",
  school3Hours: "exampleSchool3Hours",
  school3Institution: "exampleSchool3Institution",
  school3Language: "exampleSchool3Language",
  school3Major: "exampleSchool3Major",
  school3Major1: "exampleSchool3Major1",
  school3Major2: "exampleSchool3Major2",
  school3Minor: "exampleSchool3Minor",
  school3Region: "exampleSchool3Region",
  school3To: "exampleSchool3To",
  school3Type: "exampleSchool3Type",
  school3Updated: "exampleSchool3Updated",
  school3Website: "exampleSchool3Website",
  school4Awards: "exampleSchool4Awards",
  school4City: "exampleSchool4City",
  school4ClassRankNumeric: "exampleSchool4ClassRankNumeric",
  school4ClassRankXOutOfY: "exampleSchool4ClassRankXOutOfY",
  school4ClassSizeNumeric: "exampleSchool4ClassSizeNumeric",
  school4Code: "exampleSchool4Code",
  school4Confirmed: "exampleSchool4Confirmed",
  school4Country: "exampleSchool4Country",
  school4Created: "exampleSchool4Created",
  school4Degree: "exampleSchool4Degree",
  school4DegreeConferred: "exampleSchool4DegreeConferred",
  school4Field: "exampleSchool4Field",
  school4From: "exampleSchool4From",
  school4Gpa: "exampleSchool4Gpa",
  school4GpaConverted: "exampleSchool4GpaConverted",
  school4GpaRecalculated: "exampleSchool4GpaRecalculated",
  school4GpaScale: "exampleSchool4GpaScale",
  school4Honors: "exampleSchool4Honors",
  school4Hours: "exampleSchool4Hours",
  school4Institution: "exampleSchool4Institution",
  school4Language: "exampleSchool4Language",
  school4Major: "exampleSchool4Major",
  school4Major1: "exampleSchool4Major1",
  school4Major2: "exampleSchool4Major2",
  school4Minor: "exampleSchool4Minor",
  school4Region: "exampleSchool4Region",
  school4To: "exampleSchool4To",
  school4Type: "exampleSchool4Type",
  school4Updated: "exampleSchool4Updated",
  school4Website: "exampleSchool4Website",
  school5Awards: "exampleSchool5Awards",
  school5City: "exampleSchool5City",
  school5ClassRankNumeric: "exampleSchool5ClassRankNumeric",
  school5ClassRankXOutOfY: "exampleSchool5ClassRankXOutOfY",
  school5ClassSizeNumeric: "exampleSchool5ClassSizeNumeric",
  school5Code: "exampleSchool5Code",
  school5Confirmed: "exampleSchool5Confirmed",
  school5Country: "exampleSchool5Country",
  school5Created: "exampleSchool5Created",
  school5Degree: "exampleSchool5Degree",
  school5DegreeConferred: "exampleSchool5DegreeConferred",
  school5Field: "exampleSchool5Field",
  school5From: "exampleSchool5From",
  school5Gpa: "exampleSchool5Gpa",
  school5GpaConverted: "exampleSchool5GpaConverted",
  school5GpaRecalculated: "exampleSchool5GpaRecalculated",
  school5GpaScale: "exampleSchool5GpaScale",
  school5Honors: "exampleSchool5Honors",
  school5Hours: "exampleSchool5Hours",
  school5Institution: "exampleSchool5Institution",
  school5Language: "exampleSchool5Language",
  school5Major: "exampleSchool5Major",
  school5Major1: "exampleSchool5Major1",
  school5Major2: "exampleSchool5Major2",
  school5Minor: "exampleSchool5Minor",
  school5Region: "exampleSchool5Region",
  school5To: "exampleSchool5To",
  school5Type: "exampleSchool5Type",
  school5Updated: "exampleSchool5Updated",
  school5Website: "exampleSchool5Website",
  schoolNum1NumberOfActiveApplications:
    "exampleSchoolNum1NumberOfActiveApplications",
  schoolNum1Priority: "exampleSchoolNum1Priority",
  schoolNum2Priority: "exampleSchoolNum2Priority",
  schoolNum3Priority: "exampleSchoolNum3Priority",
  schoolNum4Priority: "exampleSchoolNum4Priority",
  schoolNum5Priority: "exampleSchoolNum5Priority",
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("MitsSlateAppSchool", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MitsSlateAppSchoolService,
          useValue: service,
        },
      ],
      controllers: [MitsSlateAppSchoolController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /mitsSlateAppSchools", async () => {
    await request(app.getHttpServer())
      .post("/mitsSlateAppSchools")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /mitsSlateAppSchools", async () => {
    await request(app.getHttpServer())
      .get("/mitsSlateAppSchools")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /mitsSlateAppSchools/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mitsSlateAppSchools"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /mitsSlateAppSchools/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mitsSlateAppSchools"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /mitsSlateAppSchools existing resource", async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post("/mitsSlateAppSchools")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/mitsSlateAppSchools")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
