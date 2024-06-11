package com.example.newproject.todo.entity;


import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "todos")
public class TodoEntity {

    @Id // 기본키로 설정하기
    @GeneratedValue(strategy = GenerationType.IDENTITY) // post할때 별도 세팅 안해도 알아서 해줌 (식별자)
    private Long id;

    @Column(nullable = false, length = 100)
    private String description;

    @Column(nullable = false)
    private Long todoOrder;

    @Column(nullable = false)
    private Boolean done;

    private LocalDate targetDate;
}
