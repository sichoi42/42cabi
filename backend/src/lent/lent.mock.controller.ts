import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpException,
  HttpStatus,
  InternalServerErrorException,
  Logger,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { UpdateCabinetMemoRequestDto } from 'src/dto/request/update.cabinet.memo.request.dto';
import { UpdateCabinetTitleRequestDto } from 'src/dto/request/update.cabinet.title.request.dto';
import { UserDto } from 'src/dto/user.dto';
import { LentService } from './lent.service';

// mock up user here
const user: UserDto = {
  // TESTER 1
  // user_id: 85330,
  // intra_id: 'sichoi',
  // TESTER 2
  // user_id: 76317,
  // intra_id: 'joopark',
  // TESTER 3
  // user_id: 110819,
  // intra_id: 'eunbikim',
  // TESTER 4
  // user_id: 69106,
  // intra_id: 'hyoon',
  // TESTER 5
  user_id: 424242,
  intra_id: 'yoyoo',
};


@ApiTags('(V3) Lent for Mock Up data')
@Controller({
  version: '3',
  path: '/api/lent_mock',
})
export class LentMockController {
  private logger = new Logger(LentMockController.name);
  constructor(private lentService: LentService) {}

  @Post('/all/:cabinet_id')
  @HttpCode(HttpStatus.CREATED)
  async lentCabinetAll(@Param('cabinet_id') cabinet_id: number) {
    const users: UserDto[] = [
      {
        // TESTER 1
        user_id: 85330,
        intra_id: 'sichoi',
      },
      {
        // TESTER 2
        user_id: 76317,
        intra_id: 'joopark',
      },
      {
        // TESTER 3
        user_id: 110819,
        intra_id: 'eunbikim',
      },
      {
        // TESTER 4
        user_id: 69106,
        intra_id: 'hyoon',
      },
      {
        // TESTER 5
        user_id: 424242,
        intra_id: 'yoyoo',
      }
    ];
    for (const user of users) {
      this.lentService.lentCabinet(cabinet_id, user);
    }
}

  @ApiOperation({
    summary: '특정 캐비넷 대여 시도',
    description: 'cabinet_id에 해당하는 캐비넷 대여를 시도합니다.',
  })
  @ApiCreatedResponse({
    description: '대여에 성공 시, 201 Created를 응답합니다.',
  })
  @ApiBadRequestResponse({
    description:
      '이미 대여중인 사물함이 있는 경우, 400 Bad_Request를 응답합니다.',
  })
  @ApiForbiddenResponse({
    description:
      '임시 밴 사물함이나 고장 사물함을 대여 시도한 경우, 403 Forbidden을 응답합니다.',
  })
  @ApiResponse({
    status: HttpStatus.I_AM_A_TEAPOT,
    description:
      "동아리 사물함을 대여 시도한 경우, 418 I'm a teapot을 응답합니다.",
  })
  @ApiConflictResponse({
    description: '잔여 자리가 없는 경우, 409 Conflict를 응답합니다.',
  })
  @Post('/:cabinet_id')
  @HttpCode(HttpStatus.CREATED)
  // @UseGuards(JwtAuthGuard, BanCheckGuard)
  async lentCabinet(@Param('cabinet_id') cabinet_id: number): Promise<void> {
    try {
      return await this.lentService.lentCabinet(cabinet_id, user);
    } catch (err) {
      this.logger.error(err);
      if (err instanceof HttpException) {
        throw err;
      } else {
        throw new InternalServerErrorException(err.message);
      }
    }
  }

  @ApiOperation({
    summary: '캐비넷의 제목 업데이트',
    description: '자신이 대여한 캐비넷의 제목을 업데이트합니다.',
  })
  @ApiBody({ type: UpdateCabinetTitleRequestDto })
  @ApiOkResponse({
    description: 'Patch 성공 시, 200 Ok를 응답합니다.',
  })
  @ApiForbiddenResponse({
    description: '사물함을 빌리지 않았는데 호출할 때',
  })
  @ApiBadRequestResponse({
    description: '요청 필드가 비어있을 때',
  })
  @ApiUnauthorizedResponse({
    description: '로그아웃 상태거나 밴 된 사용자거나 JWT 세션이 만료됨',
  })
  @Patch('/update_cabinet_title')
  @HttpCode(HttpStatus.OK)
  // @UseGuards(JwtAuthGuard, BanCheckGuard)
  async updateLentCabinetTitle(
    @Body(new ValidationPipe())
    updateCabinetTitleRequestDto: UpdateCabinetTitleRequestDto,
  ): Promise<void> {
    try {
      return await this.lentService.updateLentCabinetTitle(
        updateCabinetTitleRequestDto.cabinet_title,
        user,
      );
    } catch (err) {
      this.logger.error(err);
      if (err instanceof HttpException) {
        throw err;
      } else {
        throw new InternalServerErrorException(err.message);
      }
    }
  }

  @ApiOperation({
    summary: '캐비넷의 메모 업데이트',
    description: '자신이 대여한 캐비넷의 메모를 업데이트합니다.',
  })
  @ApiBody({ type: UpdateCabinetMemoRequestDto })
  @ApiOkResponse({
    description: 'Patch 성공 시, 200 Ok를 응답합니다.',
  })
  @ApiForbiddenResponse({
    description: '사물함을 빌리지 않았는데 호출할 때',
  })
  @ApiBadRequestResponse({
    description: '요청 필드가 비어있을 때',
  })
  @ApiUnauthorizedResponse({
    description: '로그아웃 상태거나 밴 된 사용자거나 JWT 세션이 만료됨',
  })
  @Patch('/update_cabinet_memo')
  @HttpCode(HttpStatus.OK)
  // @UseGuards(JwtAuthGuard, BanCheckGuard)
  async updateLentCabinetMemo(
    @Body(new ValidationPipe())
    updateCabinetMemoRequestDto: UpdateCabinetMemoRequestDto,
  ): Promise<void> {
    try {
      return await this.lentService.updateLentCabinetMemo(
        updateCabinetMemoRequestDto.cabinet_memo,
        user,
      );
    } catch (err) {
      this.logger.error(err);
      if (err instanceof HttpException) {
        throw err;
      } else {
        throw new InternalServerErrorException(err.message);
      }
    }
  }

  @ApiOperation({
    summary: '대여한 사물함을 반납',
    description: '자신이 대여한 캐비넷을 반납합니다.',
  })
  @ApiNoContentResponse({
    description: 'Delete 성공 시, 204 No_Content를 응답합니다.',
  })
  @ApiForbiddenResponse({
    description: '사물함을 빌리지 않았는데 호출할 때 ',
  })
  @ApiInternalServerErrorResponse({
    description: '쿼리 수행 에러 등 기타 서버 문제 발생 시',
  })
  @Delete('/return')
  @HttpCode(HttpStatus.NO_CONTENT)
  // @UseGuards(JwtAuthGuard, BanCheckGuard)
  async returnCabinet(): Promise<void> {
    try {
      return await this.lentService.returnCabinet(user);
    } catch (err) {
      this.logger.error(err);
      if (err instanceof HttpException) {
        throw err;
      } else {
        throw new InternalServerErrorException(err.message);
      }
    }
  }
}