package com.aclaputra.persona.web.game.route;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import java.util.Date;

@RestController
@RequestMapping("/")
public class ReactRouteController {

    @GetMapping("/api/hello")
    public String hello() {
        return "Hello, the time at the server is now " + new Date() + "\n";
    }

    @GetMapping("")
    public ModelAndView home() {
        ModelAndView mav = new ModelAndView("index");
        return mav;
    }

    @GetMapping("/characters")
    public ModelAndView listCharacter() {
        ModelAndView mav = new ModelAndView("index");
        return mav;
    }
}
