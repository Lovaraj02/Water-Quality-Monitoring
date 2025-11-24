# ==== BUILD STAGE ====
FROM maven:3.9.5-eclipse-temurin-17 AS build
WORKDIR /app

# Copy only backend files
COPY pom.xml .
COPY src ./src

# Build the application
RUN mvn -q -e -DskipTests clean package

# ==== RUN STAGE ====
FROM eclipse-temurin:17-jdk
WORKDIR /app

# Copy the built JAR
COPY --from=build /app/target/*.jar app.jar

EXPOSE 8081
ENTRYPOINT ["java", "-jar", "app.jar"]
