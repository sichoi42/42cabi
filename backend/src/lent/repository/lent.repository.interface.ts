import { LentDto } from 'src/dto/lent.dto';
import { SimpleCabinetDataDto } from 'src/dto/simple.cabinet.data.dto';
import { UserDto } from 'src/dto/user.dto';
import Lent from 'src/entities/lent.entity';

export interface ILentRepository {
  /**
   * 사용자가 사물함을 대여중인지 아닌지를 반환합니다.
   * @param user_id
   * @return boolean
   */
  getIsLent(user_id: number): Promise<boolean>;

  /**
   * 해당 캐비넷을 대여하고 있는 유저의 수를 반환합니다.
   * @param cabinet_id
   * @return number
   */
  getLentUserCnt(cabinet_id: number): Promise<number>;

  /**
   * lent_id에 해당하는 row를 expire_time을 설정합니다.
   * @param lent_id
   * @param expire_time
   * @return void
   */
  setExpireTime(lent_id: number, expire_time: Date): Promise<void>;

  /**
   * cabinet_id 대응하는 lent들의 expire_time을 설정합니다.
   * @param cabinet_id
   * @param expire_time
   * @return void
   */
  setExpireTimeAll(cabinet_id: number, expire_time: Date): Promise<void>;

  /**
   * 특정 user_id로 해당 캐비넷 대여를 시도합니다.
   * 대여에 성공하면 void를 반환합니다.
   * @param user_id
   * @param cabinet_id
   * @return void
   */
  lentCabinet(user: UserDto, cabinet_id: number): Promise<LentDto>;

  /**
   * 해당 user_id로 대여중인 Cabinet id를 반환합니다.
   * 실패 시,
   * @param user_id
   * @return number
   */
  getLentCabinetId(user_id: number): Promise<number>;

  /**
   * cabinet_id에 대응하는 캐비넷의 제목을 cabinet_title로 업데이트합니다.
   * @param cabinet_title
   * @param cabinet_id
   * @return void
   */
  updateLentCabinetTitle(
    cabinet_title: string | null,
    cabinet_id: number,
  ): Promise<void>;

  /**
   * cabinet_id에 대응하는 캐비넷의 메모를 cabinet_memo로 업데이트합니다.
   * @param cabinet_memo
   * @param cabinet_id
   * @return void
   */
  updateLentCabinetMemo(
    cabinet_memo: string | null,
    cabinet_id: number,
  ): Promise<void>;

  /**
   * user_id에 대응하는 lent 정보를 반환합니다.
   * @param user_id
   * @return Lent
   */
  getLent(user_id: number): Promise<Lent>;

  /**
   * 모든 Lent 정보를 가져옵니다.
   * @return Lent[]
   */
  getAllLent(): Promise<Lent[]>;

  /**
   * user_id에 대응하는 Lent값을 삭제합니다.
   * 해당 Lent 값을 반환합니다.
   * @param user_id
   * @return void
   */
  deleteLentByLentId(lent_id: number): Promise<void>;

  /**
   * 기존 lent 정보를 lent log에 추가합니다.
   * @param Lent
   * @return void
   */
  addLentLog(lent: Lent): Promise<void>;

  /**
   * 사물함을 빌리기 전 사물함에 대한 최소한의 정보를 가져옴.
   * @param cabinet_id
   * @return SimpleCabinetDataDto
   **/
  getSimpleCabinetData(cabinet_id: number): Promise<SimpleCabinetDataDto>;
}