package project.musicapp;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class MusicAppApplicationTests {
	@Test
	void contextLoads() {

	}

	@Test
	void test() {
		Assertions.assertEquals(1.0, 1);
	}
}
