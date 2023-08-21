package com.example.evaluacion04;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.cloud.FirestoreClient;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream; 

@Configuration
public class FireBase {
    @Bean
    public Firestore firestore() throws IOException {
        InputStream serviceAccount = getClass()
                .getResourceAsStream("/evo03-c9619-firebase-adminsdk-th2n1-dc060d947b.json");
        GoogleCredentials credentials = GoogleCredentials.fromStream(serviceAccount);
        FirebaseOptions options = new FirebaseOptions.Builder()
                .setCredentials(credentials)
                .build();
        FirebaseApp.initializeApp(options);
        return FirestoreClient.getFirestore();
    }    
}
