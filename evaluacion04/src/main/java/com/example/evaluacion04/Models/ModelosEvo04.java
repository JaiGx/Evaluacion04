package com.example.evaluacion04.Models;

public class ModelosEvo04 {
    private String id;
    private String Nombre;
    private String Apellido;
    private Double Edad;

    // Constructor vacío
    public ModelosEvo04() {
    }

    // Constructor completo
    public ModelosEvo04(String id, String Nombre, String Apellido, Double Edad) {
        this.id = id;
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Edad = Edad;
    }

    // Getters y setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNombre() {
        return Nombre;
    }

    public void setNombre(String Nombre) {
        this.Nombre = Nombre;
    }

    public String getApellido() {
        return Apellido;
    }

    public void setApellido(String Apellido) {
        this.Apellido = Apellido;
    }

    public Double getEdad() {
        return Edad;
    }

    public void setEdad(Double Edad) {
        this.Edad = Edad;
    }
}
