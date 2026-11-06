
package com.uade.todolist.controller;

import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/cookies")
public class CookieController {

    // Crear cookie
    @GetMapping("/crear")
    public ResponseEntity<String> crearCookie() {

        ResponseCookie cookie = ResponseCookie
                .from("usuario", "Luciano")
                .httpOnly(true)
                .secure(false)
                .path("/")
                .sameSite("Lax")
                .build();

        return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, cookie.toString())
                .body("Cookie creada correctamente");
    }

    // Leer cookie
    @GetMapping("/leer")
    public ResponseEntity<String> leerCookie(
            @CookieValue(defaultValue = "No encontrada") String usuario) {

        return ResponseEntity.ok("Cookie recibida: " + usuario);
    }
}
