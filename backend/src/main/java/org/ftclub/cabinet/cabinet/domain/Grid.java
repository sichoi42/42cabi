package org.ftclub.cabinet.cabinet.domain;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.ftclub.cabinet.exception.DomainException;
import org.ftclub.cabinet.exception.ExceptionStatus;

/**
 * 사물함이 실제로 구역에서 위치한 행과 열입니다.
 */
@Embeddable
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Grid {

	@Column(name = "ROW")
	private Integer row;
	@Column(name = "COL")
	private Integer col;

	public static Grid of(Integer row, Integer col) {
		Grid grid = new Grid(row, col);
		if (!grid.isValid()) {
			throw new DomainException(ExceptionStatus.INVALID_ARGUMENT);
		}
		return new Grid(row, col);
	}

	public boolean isValid() {
		return (this.row > 0 && this.col > 0);
	}
}
