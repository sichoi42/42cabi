package org.ftclub.cabinet.cabinet.domain;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * 사물함들이 위치하는 구역에 대한 엔티티입니다.
 */
@Entity
@Table(name = "CABINET_PLACE")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class CabinetPlace {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "CABINET_PLACE_ID")
	private Long cabinetPlaceId;

	/**
	 * {@link Location}
	 */
	@Embedded
	private Location location;
	/**
	 * {@link Grid}
	 */
	@Embedded
	private Grid grid;

	/**
	 * {@link MapArea}
	 */
	@Embedded
	private MapArea mapArea;

	protected CabinetPlace(Location location, Grid grid, MapArea mapArea) {
		this.location = location;
		this.grid = grid;
		this.mapArea = mapArea;
	}

	public static CabinetPlace of(Location location, Grid grid, MapArea mapArea) {
		return new CabinetPlace(location, grid, mapArea);
	}

	@Override
	public boolean equals(final Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof CabinetPlace)) {
			return false;
		}
		return this.cabinetPlaceId.equals(((CabinetPlace) other).cabinetPlaceId);
	}
}