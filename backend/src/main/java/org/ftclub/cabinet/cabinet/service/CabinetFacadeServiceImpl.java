package org.ftclub.cabinet.cabinet.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.ftclub.cabinet.cabinet.domain.Cabinet;
import org.ftclub.cabinet.cabinet.domain.CabinetStatus;
import org.ftclub.cabinet.cabinet.domain.Grid;
import org.ftclub.cabinet.cabinet.domain.LentType;
import org.ftclub.cabinet.cabinet.domain.Location;
import org.ftclub.cabinet.cabinet.repository.CabinetRepository;
import org.ftclub.cabinet.dto.*;
import org.ftclub.cabinet.exception.ExceptionStatus;
import org.ftclub.cabinet.exception.ServiceException;
import org.ftclub.cabinet.lent.domain.LentHistory;
import org.ftclub.cabinet.lent.repository.LentRepository;
import org.ftclub.cabinet.mapper.CabinetMapper;
import org.ftclub.cabinet.mapper.LentMapper;
import org.ftclub.cabinet.user.repository.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Transactional
public class CabinetFacadeServiceImpl implements CabinetFacadeService {

	private final CabinetService cabinetService;
	private final CabinetRepository cabinetRepository;
	private final LentRepository lentRepository;
	private final UserRepository userRepository;
	private final CabinetMapper cabinetMapper;
	private final LentMapper lentMapper;

	/**
	 * {@inheritDoc}
	 * <p>
	 * 존재하는 모든 건물들을 가져오고, 각 건물별 층 정보들을 가져옵니다.
	 */
	@Override
	public List<BuildingFloorsDto> getBuildingFloorsResponse() {
		List<BuildingFloorsDto> buildingFloors = new ArrayList<>();
		List<String> buildings = cabinetRepository.findAllBuildings().orElseThrow();
		for (String building : buildings) {
			List<Integer> floors = cabinetRepository.findAllFloorsByBuilding(building)
					.orElseThrow();
			buildingFloors.add(cabinetMapper.toBuildingFloorsDto(building, floors));
		}
		return buildingFloors;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public CabinetInfoResponseDto getCabinetInfo(Long cabinetId) {
		if (!cabinetRepository.existsById(cabinetId)) {
			throw new ServiceException(ExceptionStatus.NOT_FOUND_CABINET);
		}
		List<LentDto> lentDtos = new ArrayList<>();
		List<LentHistory> lentHistories = lentRepository.findAllActiveLentByCabinetId(cabinetId);
		for (LentHistory lentHistory : lentHistories) {
			String name = userRepository.findNameById(lentHistory.getUserId());
			lentDtos.add(lentMapper.toLentDto(name, lentHistory));
		}
		return cabinetMapper.toCabinetInfoResponseDto(getCabinet(cabinetId), lentDtos);
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public List<CabinetsPerSectionResponseDto> getCabinetsPerSection(String building,
			Integer floor) {
		if (!cabinetRepository.existsBuildingAndFloor(building, floor) || building.isEmpty()) {
			throw new ServiceException(ExceptionStatus.INVALID_ARGUMENT);
		}
		List<CabinetsPerSectionResponseDto> result = new ArrayList<>();
		List<String> sections = cabinetRepository.findAllSectionsByBuildingAndFloor(building, floor)
				.orElseThrow();
		for (String section : sections) {
			List<Long> cabinetIds = cabinetRepository.findAllCabinetIdsBySection(section)
					.orElseThrow();
			result.add(cabinetMapper.toCabinetsPerSectionResponseDto(section,
					getCabinetInfoBundle(cabinetIds)));
		}
		return result;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public void updateCabinetStatusNote(Long cabinetId, String statusNote) {
		cabinetService.updateStatusNote(cabinetId, statusNote);
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public void updateCabinetTitle(Long cabinetId, String title) {
		cabinetService.updateTitle(cabinetId, title);
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public void updateCabinetGrid(Long cabinetId, Integer row, Integer col) {
		cabinetService.updateGrid(cabinetId, Grid.of(row, col));
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public void updateCabinetVisibleNum(Long cabinetId, Integer visibleNum) {
		cabinetService.updateVisibleNum(cabinetId, visibleNum);
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public void updateCabinetBundleStatus(List<Long> cabinetIds, CabinetStatus status) {
		for (Long cabinetId : cabinetIds) {
			cabinetService.updateStatus(cabinetId, status);
		}
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public void updateCabinetBundleLentType(List<Long> cabinetIds, LentType lentType) {
		for (Long cabinetId : cabinetIds) {
			cabinetService.updateLentType(cabinetId, lentType);
		}
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public CabinetPaginationDto getCabinetPaginationByLentType(LentType lentType,
			PageRequest pageable) {
		Page<Cabinet> cabinets = cabinetRepository.findAllCabinetsByLentType(lentType, pageable);
		return cabinetMapper.toCabinetPaginationDtoList(cabinets.toList(),
				cabinets.getTotalPages());
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public CabinetPaginationDto getCabinetPaginationByStatus(CabinetStatus status,
			PageRequest pageable) {
		Page<Cabinet> cabinets = cabinetRepository.findAllCabinetsByStatus(status, pageable);
		return cabinetMapper.toCabinetPaginationDtoList(cabinets.toList(),
				cabinets.getTotalPages());
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public CabinetPaginationDto getCabinetPaginationByVisibleNum(Integer visibleNum,
			PageRequest pageable) {
		Page<Cabinet> cabinets = cabinetRepository.findAllCabinetsByVisibleNum(visibleNum,
				pageable);
		return cabinetMapper.toCabinetPaginationDtoList(cabinets.toList(),
				cabinets.getTotalPages());
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public LentHistoryPaginationDto getCabinetLentHistoriesPagination(Long cabinetId,
			PageRequest pageable) {
		Page<LentHistory> lentHistories = lentRepository.findPaginationByCabinetId(cabinetId,
				pageable);
		return lentMapper.toLentHistoryPaginationDto(
				generateLentHistoryDtoList(lentHistories.toList()), lentHistories.getTotalPages());
	}

	/**
	 * 사물함 정보와 위치 정보를 가져옵니다.
	 *
	 * @param cabinetId 사물함 id
	 * @return 사물함과 위치 정보
	 * @throws ServiceException 존재하지 않는 사물함인 경우 예외 발생
	 */
	public CabinetDto getCabinet(Long cabinetId) {
		Cabinet cabinet = cabinetRepository.findById(cabinetId)
				.orElseThrow(() -> new ServiceException(ExceptionStatus.NOT_FOUND_CABINET));
		Location location = cabinetRepository.findLocationById(cabinetId)
				.orElseThrow(() -> new ServiceException(ExceptionStatus.NOT_FOUND_CABINET));
		return cabinetMapper.toCabinetDto(location, cabinet);
	}

	/**
	 * 사물함들의 정보와 각각의 대여 정보들을 가져옵니다.
	 *
	 * @param cabinetIds 사물함 id 리스트
	 * @return 사물함 정보 리스트
	 */
	public List<CabinetInfoResponseDto> getCabinetInfoBundle(List<Long> cabinetIds) {
		List<CabinetInfoResponseDto> result = new ArrayList<>();
		for (Long cabinetId : cabinetIds) {
			result.add(getCabinetInfo(cabinetId));
		}
		return result;
	}

	@Override
	public CabinetInfoPaginationDto getCabinetsInfo(Integer visibleNum) {
		Pageable page = Pageable.unpaged();
		Page<Cabinet> allCabinetsByVisibleNum = cabinetRepository.findAllCabinetsByVisibleNum(visibleNum, page);
		List<Long> collect = allCabinetsByVisibleNum.map(cabinet -> cabinet.getCabinetId())
				.stream().collect(Collectors.toList());
		return new CabinetInfoPaginationDto(getCabinetInfoBundle(collect), allCabinetsByVisibleNum.getTotalPages());
	}

	/**
	 * LentHistory를 이용해 LentHistoryDto로 매핑하여 반환합니다.
	 * ToDo : new -> mapper 쓰기 + query service 분리
	 *
	 * @param lentHistories 대여 기록 리스트
	 * @return LentHistoryDto 리스트
	 */
	private List<LentHistoryDto> generateLentHistoryDtoList(
			List<LentHistory> lentHistories) {
		return lentHistories.stream()
				.map(e -> lentMapper.toLentHistoryDto(e,
						userRepository.getUser(e.getUserId()),
						cabinetRepository.findById(e.getCabinetId()).orElseThrow()))
				.collect(Collectors.toList());
	}
}