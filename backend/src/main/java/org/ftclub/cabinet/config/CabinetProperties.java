package org.ftclub.cabinet.config;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@Getter
public class CabinetProperties {

	@Value("${spring.cabinet.lent.term.private}")
	private Integer lentTermPrivate;
	@Value("${spring.cabinet.lent.term.share}")
	private Integer lentTermShare;
	@Value("${spring.cabinet.penalty.day.share}")
	private Integer penaltyDayShare;
	@Value("${spring.cabinet.penalty.day.padding}")
	private Integer penaltyDayPadding;

}
