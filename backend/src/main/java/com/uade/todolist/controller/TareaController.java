package com.uade.todolist.controller;

import com.uade.todolist.model.Tarea;
import com.uade.todolist.service.TareaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tareas")
public class TareaController {

    private final TareaService tareaService;

    public TareaController(TareaService tareaService) {
        this.tareaService = tareaService;
    }

    @GetMapping
    public List<Tarea> listarTareas() {
        return tareaService.listarTareas();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tarea> buscarTarea(@PathVariable Long id) {
        return tareaService.buscarTarea(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Tarea crearTarea(@RequestBody Tarea tarea) {
        return tareaService.guardarTarea(tarea);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Tarea> modificarTarea(@PathVariable Long id, @RequestBody Tarea tarea) {

        return tareaService.buscarTarea(id)
                .map(tareaExistente -> {
                    tareaExistente.setTitulo(tarea.getTitulo());
                    tareaExistente.setDescripcion(tarea.getDescripcion());
                    tareaExistente.setTipo(tarea.getTipo());
                    tareaExistente.setCompletada(tarea.isCompletada());

                    Tarea actualizada = tareaService.guardarTarea(tareaExistente);
                    return ResponseEntity.ok(actualizada);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarTarea(@PathVariable Long id) {
        if (tareaService.buscarTarea(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        tareaService.eliminarTarea(id);
        return ResponseEntity.noContent().build();
    }
}