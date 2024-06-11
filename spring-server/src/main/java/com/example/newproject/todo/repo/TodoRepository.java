package com.example.newproject.todo.repo;

import com.example.newproject.todo.entity.TodoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


/**
 * QueryDSL로 마이그레이션 예정
 * **/
@Repository
public interface TodoRepository extends JpaRepository<TodoEntity, Integer> {
//    Optional<TodoEntity> findByTitle(String title);
//    Optional<TodoEntity> findById(Long Id);
}
