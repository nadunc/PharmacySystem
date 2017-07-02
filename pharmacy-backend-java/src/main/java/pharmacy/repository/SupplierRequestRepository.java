package pharmacy.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import pharmacy.model.SupplierRequest;

/**
 * Created by Nadun on 7/1/2017.
 */
public interface SupplierRequestRepository extends MongoRepository<SupplierRequest, String>{
}
