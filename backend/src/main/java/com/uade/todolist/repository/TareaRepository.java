package com.uade.todolist.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.uade.todolist.model.Tarea;

public interface TareaRepository extends JpaRepository<Tarea, Long> {}
