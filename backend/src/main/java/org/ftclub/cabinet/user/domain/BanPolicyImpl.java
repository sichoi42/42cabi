package org.ftclub.cabinet.user.domain;

import java.util.Date;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.ftclub.cabinet.cabinet.domain.LentType;
import org.ftclub.cabinet.config.CabinetProperties;
import org.ftclub.cabinet.user.repository.BanHistoryRepository;
import org.ftclub.cabinet.user.service.UserService;
import org.ftclub.cabinet.utils.DateUtil;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class BanPolicyImpl implements BanPolicy {
	private static final Logger logger = LogManager.getLogger(BanPolicy.class);
	private final CabinetProperties cabinetProperties;
	private final BanHistoryRepository banHistoryRepository;

	@Override
	public BanType verifyForBanType(LentType lentType, Date startAt, Date endedAt, Date expiredAt) {
		logger.info("Called verifyForBanType");
		if (checkAlreadyExpired(endedAt, expiredAt)) {
			return BanType.ALL;
		}
		if (lentType == LentType.SHARE) {
			Long dateDiff = DateUtil.calculateTwoDateDiffAbs(startAt, endedAt);
			if (dateDiff < cabinetProperties.getPenaltyDayShare()) {
				return BanType.SHARE;
			}
		}
		return BanType.NONE;
	}

	@Override
	public Date getBanDate(BanType banType, Date endedAt, Date expiredAt, Long userId) {
		logger.info("Called getBanDate");
		if (banType == BanType.SHARE) {
			return DateUtil.addDaysToDate(endedAt, cabinetProperties.getPenaltyDayShare());
		} else {
			int currentBanDays = DateUtil.calculateTwoDateDiffAbs(endedAt, expiredAt).intValue();
			int accumulateBanDays = getAccumulateBanDaysByUserId(userId).intValue();
			return DateUtil.addDaysToDate(endedAt, currentBanDays + accumulateBanDays);
		}
	}

	@Override
	public boolean checkAlreadyExpired(Date endedAt, Date expiredAt) {
		logger.info("Called checkAlreadyExpired");
		return expiredAt.before(endedAt);
	}

	@Override
	public boolean isActiveBanHistory(Date unbannedAt, Date now) {
		logger.info("Called isActiveBanHistory");
		return now.before(unbannedAt);
	}

	@Override
	public Long getAccumulateBanDaysByUserId(Long userId) {
		logger.info("Called getAccumulateBanDaysByUserId");
		List<BanHistory> banHistories = banHistoryRepository.findBanHistoriesByUserId(userId);
		Long accumulateDays = 0L;
		for (BanHistory history : banHistories) {
			accumulateDays += DateUtil.calculateTwoDateDiffAbs(history.getBannedAt(),
					history.getUnbannedAt());
		}
		return accumulateDays;
	}
}
