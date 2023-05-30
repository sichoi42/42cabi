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
 * 건물, 층, 구역에 대한 정보입니다.
 */
@Embeddable
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@EqualsAndHashCode
@Getter
public class Location {

	@Column(name = "BUILDING")
	private String building;
	@Column(name = "FLOOR")
	private Integer floor;
	@Column(name = "SECTION")
	private String section;

	public static Location of(String building, Integer floor, String section) {
		Location location = new Location(building, floor, section);
		location.validateAndThrow();
		return location;
	}

	private boolean isValid() {
		return this.building != null
				&& this.floor > 0
				&& this.section != null;
	}

	public void validateAndThrow() {
		if (!this.isValid()) {
			throw new DomainException(ExceptionStatus.INVALID_ARGUMENT);
		}
	}
}
