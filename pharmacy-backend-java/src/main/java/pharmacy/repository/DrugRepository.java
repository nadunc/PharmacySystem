package pharmacy.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import pharmacy.model.Drug;

/**
 * Created by Nadun on 6/28/2017.
 */
public interface DrugRepository extends MongoRepository<Drug, String> {
}
