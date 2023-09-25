package com.ssafy.tenten.api.service;

import org.imgscalr.Scalr;
import org.springframework.web.multipart.MultipartFile;

import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.Map;

public interface ImageService {
    Map<String, Object> getImage(String imageName, String option);
    String uploadImage(MultipartFile image, String option) throws IOException;

}
