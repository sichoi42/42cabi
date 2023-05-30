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
		grid.validateAndThrow();
		return new Grid(row, col);
	}

	private boolean isValid(Grid grid) {
		return (grid.row > 0 && grid.col > 0);
	}

	public void validateAndThrow() {
		if (!this.isValid(this)) {
			throw new DomainException(ExceptionStatus.INVALID_ARGUMENT);
		}
	}
}
