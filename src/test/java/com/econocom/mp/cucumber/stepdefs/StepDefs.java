package com.econocom.mp.cucumber.stepdefs;

import com.econocom.mp.MpApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = MpApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
