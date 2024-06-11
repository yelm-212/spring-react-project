package com.example.newproject.todo.contoller;


import com.example.newproject.todo.dto.TodoDto;
import com.example.newproject.todo.entity.TodoEntity;
import com.example.newproject.todo.service.TodoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/todos")
@Validated
@Slf4j
public class TodoController {
    private final static String TODO_DEF_URL = "/todos";
    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @PostMapping
    public ResponseEntity postTodo(@Valid @RequestBody TodoDto.Post requestBody){

        return todoService.createTodo(requestBody);
    }

    @PatchMapping("/{todo-id}")
    public ResponseEntity patchTodo(@PathVariable("todo-id") @Positive long Id,
                                    @Valid @RequestBody TodoDto.Patch requestBody){

        return todoService.updateTodo(requestBody, Id);
    }

    @GetMapping("/{todo-id}")
    public ResponseEntity getTodo(
            @PathVariable("todo-id") @Positive long Id) {

        return todoService.findTodo(Id);
    }

    // get todos with pagination
    @GetMapping
    public ResponseEntity getTodos(@Positive @RequestParam int page,
                                   @Positive @RequestParam int size,
                                   @RequestParam(required = false, defaultValue = "") String sort) {

        return todoService.findTodos(page - 1, size, sort);
    }

    @DeleteMapping("/{todo-id}")
    public ResponseEntity deleteMember(
            @PathVariable("todo-id") @Positive long Id) {
        todoService.deleteTodo(Id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("/")
    public ResponseEntity deleteMember() {
        todoService.deleteTodo();
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
