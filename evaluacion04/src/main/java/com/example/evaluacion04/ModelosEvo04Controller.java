package com.example.evaluacion04;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


import org.springframework.web.bind.annotation.RestController;

import com.google.api.core.ApiFuture;
import com.google.api.core.CurrentMillisClock;
import com.google.cloud.firestore.CollectionReference;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.cloud.firestore.SetOptions;
import com.example.evaluacion04.Models.ModelosEvo04;
import com.fasterxml.jackson.annotation.JsonIgnore; 

@RestController
@RequestMapping("/api/ModelosEvo04")
public class ModelosEvo04Controller {

    @JsonIgnore
    private CurrentMillisClock clock;

    private final Firestore firestore;

    @Autowired
    public ModelosEvo04Controller(Firestore firestore) {
        this.firestore = firestore;
    }

    @GetMapping("/getAll")
    public List<ModelosEvo04> getAllItems() throws InterruptedException, ExecutionException {
        CollectionReference walmartCollection = firestore.collection("eva04");
        ApiFuture<QuerySnapshot> query = walmartCollection.get();
        QuerySnapshot querySnapshot = query.get();

        List<ModelosEvo04> walmartList = new ArrayList<>();
        for (QueryDocumentSnapshot document : querySnapshot.getDocuments()) {
            String documentId = document.getId();
            String Nombre = document.getString("Nombre");
            String Apellido = document.getString("Apellido");
            Double Edad = document.getDouble("Edad");

            ModelosEvo04 ModelosEvo04 = new ModelosEvo04(documentId, Nombre, Apellido, Edad);
            walmartList.add(ModelosEvo04);
        }

        return walmartList;
    }

    // Register
    @PostMapping("/register")
    public ModelosEvo04 registerItem(@RequestBody ModelosEvo04 newItem) throws InterruptedException, ExecutionException {
        CollectionReference walmartCollection = firestore.collection("ModelosEvo04");
        
        // Aquí podrías validar los campos del nuevo item antes de guardarlo
        
        // Agrega el nuevo item a Firestore
        ApiFuture<DocumentReference> result = walmartCollection.add(newItem);
        DocumentReference documentReference = result.get();
        newItem.setId(documentReference.getId());
        
        return newItem;
    };

    //editar producto
    @PutMapping("/update/{itemId}")
    public ModelosEvo04 updateProducto(@PathVariable String itemId, @RequestBody ModelosEvo04 updateProducto){
        DocumentReference productoRef = firestore.collection("Walmart").document(itemId);
        productoRef.set(updateProducto, SetOptions.merge()); //Actualiza documento con los nuevos datos
        return updateProducto;
    };

    //delete producto
    @DeleteMapping("/delete/{itemId}")
    public void deleteProducto(@PathVariable String itemId){
        DocumentReference productoRef = firestore.collection("ModelosEvo04").document(itemId);
        productoRef.delete();
    } 

}
