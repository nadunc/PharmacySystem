package pharmacy.service;

import pharmacy.model.SupplierRequest;

import java.util.List;

/**
 * Created by Nadun on 7/1/2017.
 */
public interface SupplierRequestService {
    SupplierRequest save(SupplierRequest supplierRequest);
    List<SupplierRequest> get();
}
