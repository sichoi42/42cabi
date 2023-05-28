package org.ftclub.cabinet.cabinet.domain;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.ftclub.cabinet.exception.DomainException;
import org.ftclub.cabinet.exception.ExceptionStatus;

/**
 * 서비스의 지도에서 나타내지는 영역의 좌표 값들입니다.
 */
@Embeddable
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@EqualsAndHashCode
@Getter
public class MapArea {

	@Column(name = "START_X")
	private Integer startX;

	@Column(name = "END_X")
	private Integer endX;

	@Column(name = "START_Y")
	private Integer startY;

	@Column(name = "END_Y")
	private Integer endY;

	public MapArea of(Integer startX, Integer endX, Integer startY, Integer endY) {
		MapArea mapArea = new MapArea(startX, endX, startY, endY);
		if (!mapArea.isValid()) {
			throw new DomainException(ExceptionStatus.INVALID_ARGUMENT);
		}
		return new MapArea(startX, endX, startY, endY);
	}

	public boolean isValid() {
		return startX >= 0
				&& endX >= 0
				&& startY >= 0
				&& endY >= 0;
	}
}
