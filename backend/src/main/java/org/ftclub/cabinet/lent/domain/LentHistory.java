package org.ftclub.cabinet.lent.domain;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Version;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.ftclub.cabinet.utils.DateUtil;

/**
 * lent의 기록을 관리하기 위한 data mapper
 */
@Entity
@Table(name = "LENT_HISTORY")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class LentHistory {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "LENT_HISTORY_ID")
	private Long lentHistoryId;

	@Version
	@Getter(AccessLevel.NONE)
	private Long version = 1L;

	@Temporal(value = TemporalType.TIMESTAMP)
	@Column(name = "STARTED_AT", nullable = false)
	private Date startedAt;

	@Temporal(value = TemporalType.TIMESTAMP)
	@Column(name = "EXPIRED_AT")
	private Date expiredAt = null;

	@Temporal(value = TemporalType.TIMESTAMP)
	@Column(name = "ENDED_AT")
	private Date endedAt = null;

	@Column(name = "USER_ID", nullable = false)
	private Long userId;

	@Column(name = "CABINET_ID", nullable = false)
	private Long cabinetId;

	protected LentHistory(Date startedAt, Date expiredAt, Long userId,
			Long cabinetId) {
		this.startedAt = startedAt;
		this.expiredAt = expiredAt;
		this.userId = userId;
		this.cabinetId = cabinetId;
	}

	public static LentHistory of(Date startedAt, Date expiredAt, Long userId,
			Long cabinetId) {
		return new LentHistory(startedAt, expiredAt, userId, cabinetId);
	}

	public static LentHistory of(Date startedAt, Long userId, Long cabinetId) {
		return new LentHistory(startedAt, null, userId, cabinetId);
	}

	@Override
	public boolean equals(final Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof LentHistory)) {
			return false;
		}
		return (this.lentHistoryId.equals(((LentHistory) other).lentHistoryId));
	}

	/**
	 * 대여한 아이디와 같은지 비교한다.
	 *
	 * @param cabinetId 비교하고 싶은 id
	 * @return boolean 같으면 true 다르면 false
	 */
	public boolean isCabinetIdEqual(Long cabinetId) {
		return this.cabinetId.equals(cabinetId);
	}

	/**
	 * 만료일을 변경합니다.
	 *
	 * @param expiredAt 변경하고 싶은 만료일
	 */
	public void setExpiredAt(Date expiredAt) {
		this.expiredAt = expiredAt;
	}

	/**
	 * 만료일이 설정 되어있는 지 확인합니다. 만료일이 {@link DateUtil}의 infinityDate와 같으면 만료일이 설정되어 있지 않다고 판단합니다.
	 *
	 * @return 설정이 되어있으면 true 아니면 false
	 */
	public boolean isSetExpiredAt() {
		return !(getExpiredAt() == null || getExpiredAt() == DateUtil.getInfinityDate());
	}

	/**
	 * 반납일이 설정 되어있는 지 확인합니다. 반납일이 {@link DateUtil}의 infinityDate와 같으면 만료일이 설정되어 있지 않다고 판단합니다.
	 *
	 * @return 설정이 되어있으면 ture 아니면 false
	 */
	public boolean isSetEndedAt() {
		return !(getEndedAt() == null || getEndedAt() == DateUtil.getInfinityDate());
	}


	/**
	 * 반납일과 만료일의 차이를 계산합니다.
	 *
	 * @return endedAt - expiredAt의 값을(일 기준)
	 */
	public Long getDaysDiffEndedAndExpired() {
		if (isSetExpiredAt() && isSetEndedAt()) {
			return DateUtil.calculateTwoDateDiff(endedAt, expiredAt);
		}
		return null;
	}

	/**
	 * 반납일을 설정합니다.
	 *
	 * @param now 설정하려고 하는 반납일
	 */
	public void endLent(Date now) {
		this.endedAt = now;
	}
}