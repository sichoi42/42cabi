package org.ftclub.cabinet.user.controller;

import static org.ftclub.testutils.TestControllerUtils.mockRequest;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import javax.servlet.http.Cookie;
import javax.transaction.Transactional;
import org.ftclub.cabinet.auth.domain.TokenValidator;
import org.ftclub.cabinet.config.JwtProperties;
import org.ftclub.cabinet.utils.DateUtil;
import org.ftclub.testutils.TestControllerUtils;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpMethod;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
@Transactional
class AdminUserControllerTest {

	@Autowired
	MockMvc mockMvc;

	@Autowired
	JwtProperties jwtProperties;

	@Autowired
	TokenValidator tokenValidator;

	String adminToken;
	Cookie cookie;

	@BeforeEach
	void setToken() {
		adminToken = TestControllerUtils.getTestAdminToken(jwtProperties.getSigningKey(),
				DateUtil.getNow());
		cookie = TestControllerUtils.getTokenCookie("관리자", adminToken);
	}

	@Test
	void deleteBanHistoryByUserId() throws Exception {
		// 밴 기록이 없는 유저
		mockMvc.perform(mockRequest(HttpMethod.DELETE, cookie,
						"/v4/admin/users/{userId}/ban-history", 2L))
				.andExpect(status().isNotFound());
	}
}