package com.example.newproject.todo.dto;


import com.querydsl.core.annotations.QueryProjection;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.time.LocalDate;


public class TodoDto {

    @Getter
    @AllArgsConstructor
    public static class Post {
        @NotBlank(message = "할 일은 공백으로 둘 수 없습니다.")
        private String description;

        @NotNull(message = "우선순위는 필수입니다.")
        @Positive(message = "우선순위는 자연수여야 합니다.")
        private Long todoOrder;

//        @Pattern(regexp = "^(true|false)$", message = "완료 여부는 'true' 또는 'false' 여야 합니다.")
        @NotNull(message = "완료 여부는 'true' 또는 'false' 여야 합니다.")
        private Boolean done;

        private String targetDate;
    }

    @Getter
    @AllArgsConstructor
    public static class Patch {
        private Long id;

        @NotBlank(message = "할 일은 공백으로 둘 수 없습니다.")
        private String description;

        @Positive(message = "우선순위는 자연수여야 합니다.")
        private Long todoOrder;

//        @Pattern(regexp = "^(true|false)$", message = "완료 여부는 'true' 또는 'false' 여야 합니다.")
        @NotNull(message = "완료 여부는 'true' 또는 'false' 여야 합니다.")
        private Boolean done;

        private String targetDate;
    }

    @Getter
    @Builder
    public static class Response {
        private Long id;
        private Long todoOrder;
        private String description;
        private Boolean done;
        private LocalDate targetDate;


        @Builder
        @QueryProjection
        public Response(Long id, Long todoOrder, String description, Boolean done, LocalDate targetDate) {

            this.id = id;
            this.todoOrder = todoOrder;
            this.description = description;
            this.done = done;
            this.targetDate = targetDate;
        }
    }
}
