package com.ssafy.tenten.api.service;


import lombok.extern.slf4j.Slf4j;
import org.imgscalr.Scalr;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;

@Service
@Slf4j
public class ImageServiceImpl implements ImageService {

    private final String VOTE_IMAGE_PATH = "/vote";
    private final String MEMBER_IMAGE_PATH = "/member";

    @Override
    public String uploadImage(MultipartFile image, String option) throws IOException {

        String uploadPath = selectPath(option);

        File uploadDir = new File(uploadPath);

        // 폴더 없으면 폴더 생성
        if (!uploadDir.exists()) uploadDir.mkdirs();

        // 파일 이름을 유니크한 값으로 생성(UUID)
        String newFileName = image.getOriginalFilename();

        String[] split = image.getOriginalFilename().split("\\.");

        try (InputStream inputStream = image.getInputStream()) {
            BufferedImage bi = ImageIO.read(inputStream);
            bi = resizeImage(bi, 450, 450);
            ImageIO.write(bi, split[1], new File(uploadPath, newFileName));
        }

        log.info("[이미징 업로드] 이미지 업로드 완료");

        return newFileName;
    }

    @Override
    public Map<String, Object> getImage(String imageName, String option) {
        String uploadPath = selectPath(option);
        String imagePath = uploadPath + File.separator + imageName;

        Resource resource = new FileSystemResource(imagePath);

        if (!resource.exists()) {
            log.error("[이미지 가져오기] 이미지 찾기 실패");
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "이미지를 찾지 못했습니다.");
        }

        log.info("[이미지 가져오기] 이미지 찾기 성공");

        HttpHeaders header = new HttpHeaders();
        Path filePath = null;
        try {
            filePath = Paths.get(imagePath);
            header.add("Content-Type", Files.probeContentType(filePath));
        } catch (Exception e) {
            e.printStackTrace();
        }

        Map<String, Object> returnMap = new HashMap<>();
        returnMap.put("header", header);
        returnMap.put("resource", resource);

        log.info("[이미지 가져오기] 이미지 가져오기 완료");
        return returnMap;
    }

    private String selectPath(String option) {

        String path = System.getProperty("user.dir");
        if (option.contains("vote")) {
            return path + VOTE_IMAGE_PATH;
        }
        log.error("[이미지 Path 선택] 유효하지 않은 옵션. option : {}", option);
        throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "유효하지 않은 option입니다.");
    }

    private BufferedImage resizeImage(BufferedImage originalImage, int targetWidth, int targetHeight) {
        // resize에 들어가는 속성을 변경해서 여러 모드로 변경해줄수있다
        return Scalr.resize(originalImage, Scalr.Method.AUTOMATIC, Scalr.Mode.FIT_EXACT, targetWidth, targetHeight, Scalr.OP_ANTIALIAS);
    }

}
