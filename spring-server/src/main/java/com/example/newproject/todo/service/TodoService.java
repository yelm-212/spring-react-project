package com.example.newproject.todo.service;

import com.example.newproject.todo.dto.TodoDto;
import com.example.newproject.todo.entity.TodoEntity;
import com.example.newproject.todo.repo.TodoQueryRepository;
import com.example.newproject.utils.dtos.MultiResponseDto;
import com.example.newproject.utils.dtos.SingleResponseDto;
import com.example.newproject.utils.exception.ExceptionCode;
import com.example.newproject.utils.exception.LogicalException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class TodoService {
    private final TodoQueryRepository todoRepository;

    public TodoService(TodoQueryRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public ResponseEntity createTodo(TodoDto.Post todo) {

        return new ResponseEntity(
                new SingleResponseDto<>(todoRepository.create(todo)),
                HttpStatus.CREATED
        );
    }

    public ResponseEntity updateTodo(TodoDto.Patch todo, long id) {

        TodoEntity foundTodo = findVerifiedTodo(todo.getId());
        if (verifyIdExists(todo.getId())) {
            throw new LogicalException(ExceptionCode.TODO_EXISTS);
        }

        return new ResponseEntity(
                new SingleResponseDto<>(todoRepository.update(id)),
                HttpStatus.CREATED
        );
    }

    public ResponseEntity findTodos(int pages, int size, String sort) {
        // TODO:
        Page<TodoDto.Response> responsePage = todoRepository.findAll(
                PageRequest.of(pages, size,
                        Sort.by("id").ascending()), sort);

        return ResponseEntity.ok(
                new MultiResponseDto<>(responsePage.getContent(), responsePage)
        );
    }
    public void deleteTodo(long id) {
        TodoEntity todo = findVerifiedTodo(id);
        todoRepository.delete(todo);
    }

    public void deleteTodo() {
        todoRepository.deleteAll();
    }

    @Transactional(readOnly = true)
    public ResponseEntity findTodo(long id) {

        return new ResponseEntity(
                new SingleResponseDto<>(findVerifiedTodo(id)),
                HttpStatus.OK
        );
    }
    private boolean verifyIdExists(Long id) {
        Optional<TodoDto.Response> todo = todoRepository.findById(id);
        return todo.isPresent();
    }

    private TodoEntity findVerifiedTodo(long id) {
        Optional<TodoDto.Response> todoOptional = todoRepository.findById(id);

        if (todoOptional.isEmpty())
            throw new LogicalException(ExceptionCode.TODO_NOT_FOUND);

        // TODO: Builder Pattern
        return TodoEntity.builder()
                .build();
    }
}


