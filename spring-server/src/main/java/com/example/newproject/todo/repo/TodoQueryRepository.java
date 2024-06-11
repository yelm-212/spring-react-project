package com.example.newproject.todo.repo;

import com.example.newproject.todo.dto.TodoDto;
import com.example.newproject.todo.entity.TodoEntity;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class TodoQueryRepository {
    private final JPAQueryFactory jpaQueryFactory;

    // TODO: QueryDSL Repository Implementation
    public TodoDto.Response create(TodoDto.Post todo) {
//        return jpaQueryFactory.insert();
        return null;
    }

    public Optional<TodoDto.Response> findById(Long id) {
        return null;
    }

    public void deleteAll() {
    }

    public Page<TodoDto.Response> findAll(Pageable pageable, String keyword) {
        return null;
    }

    public TodoDto.Response update(long id) {
        return null;
    }

    public List<TodoDto.Response> findAll() {
        return null;
    }

    public void delete(TodoEntity todo) {

    }
}