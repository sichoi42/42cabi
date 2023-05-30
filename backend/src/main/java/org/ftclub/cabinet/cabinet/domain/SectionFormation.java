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
 * 섹션을 구성하는 사물함들의 가로 x 세로에 대한 데이터입니다.
 */
@Embeddable
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@EqualsAndHashCode
@Getter
public class SectionFormation {

	@Column(name = "WIDTH")
	private Integer width;

	@Column(name = "HEIGHT")
	private Integer height;

	public static SectionFormation of(Integer width, Integer height) {
		SectionFormation sectionFormation = new SectionFormation(width, height);
		sectionFormation.validateAndThrow();
		return sectionFormation;
	}

	private boolean isValid() {
		return width >= 0 && height >= 0;
	}

	public void validateAndThrow() {
		if (!this.isValid()) {
			throw new DomainException(ExceptionStatus.INVALID_ARGUMENT);
		}
	}
}
