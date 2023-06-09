package org.ftclub.cabinet.statistics.service;

import org.ftclub.cabinet.dto.BlockedUserPaginationDto;
import org.ftclub.cabinet.dto.CabinetFloorStatisticsResponseDto;
import org.ftclub.cabinet.dto.LentsStatisticsResponseDto;
import org.ftclub.cabinet.dto.OverdueUserCabinetPaginationDto;

import java.util.Date;
import java.util.List;

public interface StatisticsFacadeService {

    List<CabinetFloorStatisticsResponseDto> getCabinetsCountOnAllFloors();

    LentsStatisticsResponseDto getCountOnLentAndReturn(Date startDate, Date endDate);

    BlockedUserPaginationDto getUsersBannedInfo(Integer page, Integer length);

    OverdueUserCabinetPaginationDto getOverdueUsers(Integer page, Integer length);
}