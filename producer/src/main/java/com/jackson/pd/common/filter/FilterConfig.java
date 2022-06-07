package com.jackson.pd.common.filter;

import com.jackson.pd.common.filter.security.BoilerPlateAuthorizationFilter;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FilterConfig {

    @Bean
    public FilterRegistrationBean<BoilerPlateAuthorizationFilter> filterOne(){
        FilterRegistrationBean<BoilerPlateAuthorizationFilter> bean = new FilterRegistrationBean<>(new BoilerPlateAuthorizationFilter());
        bean.addUrlPatterns("/*");
        bean.setOrder(0);
        return bean;
    }
}
