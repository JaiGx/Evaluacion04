# Usar una imagen base de OpenJDK
FROM openjdk:17-alpine

# Establecer el directorio de trabajo en la imagen
WORKDIR /app

# Copiar el archivo JAR compilado al contenedor
COPY target/evaluacion04-0.0.1-SNAPSHOT.jar /app/evaluacion04.jar

# Exponer el puerto en el que se ejecuta la aplicación Spring Boot
EXPOSE 8080

# Comando para ejecutar la aplicación
CMD ["java", "-jar", "evaluacion04.jar"]
