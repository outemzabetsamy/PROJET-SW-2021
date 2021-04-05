package sw.projet.images.db;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import sw.projet.images.model.*;

public interface ImageRepository extends JpaRepository<ImageModel, Long> {
	Optional<ImageModel> findByName(String name);
}