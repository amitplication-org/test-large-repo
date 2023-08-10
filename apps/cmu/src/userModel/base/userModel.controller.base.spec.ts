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
import { UserModelController } from "../userModel.controller";
import { UserModelService } from "../userModel.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  email: "exampleEmail",
  firstname: "exampleFirstname",
  guid: "exampleGuid",
  id: 42,
  initials: "exampleInitials",
  lastname: "exampleLastname",
  middlename: "exampleMiddlename",
  password: "examplePassword",
  signupDate: new Date(),
  title: "exampleTitle",
  username: "exampleUsername",
  verified: "true",
};
const CREATE_RESULT = {
  email: "exampleEmail",
  firstname: "exampleFirstname",
  guid: "exampleGuid",
  id: 42,
  initials: "exampleInitials",
  lastname: "exampleLastname",
  middlename: "exampleMiddlename",
  password: "examplePassword",
  signupDate: new Date(),
  title: "exampleTitle",
  username: "exampleUsername",
  verified: "true",
};
const FIND_MANY_RESULT = [
  {
    email: "exampleEmail",
    firstname: "exampleFirstname",
    guid: "exampleGuid",
    id: 42,
    initials: "exampleInitials",
    lastname: "exampleLastname",
    middlename: "exampleMiddlename",
    password: "examplePassword",
    signupDate: new Date(),
    title: "exampleTitle",
    username: "exampleUsername",
    verified: "true",
  },
];
const FIND_ONE_RESULT = {
  email: "exampleEmail",
  firstname: "exampleFirstname",
  guid: "exampleGuid",
  id: 42,
  initials: "exampleInitials",
  lastname: "exampleLastname",
  middlename: "exampleMiddlename",
  password: "examplePassword",
  signupDate: new Date(),
  title: "exampleTitle",
  username: "exampleUsername",
  verified: "true",
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

describe("UserModel", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: UserModelService,
          useValue: service,
        },
      ],
      controllers: [UserModelController],
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

  test("POST /userModels", async () => {
    await request(app.getHttpServer())
      .post("/userModels")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        signupDate: CREATE_RESULT.signupDate.toISOString(),
      });
  });

  test("GET /userModels", async () => {
    await request(app.getHttpServer())
      .get("/userModels")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          signupDate: FIND_MANY_RESULT[0].signupDate.toISOString(),
        },
      ]);
  });

  test("GET /userModels/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userModels"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /userModels/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userModels"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        signupDate: FIND_ONE_RESULT.signupDate.toISOString(),
      });
  });

  test("POST /userModels existing resource", async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post("/userModels")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        signupDate: CREATE_RESULT.signupDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/userModels")
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
