package com.jackson.pd.domain;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode
@ToString
@Getter
public class Product {

    protected int id;
    protected String name;
    protected String nick;

}


