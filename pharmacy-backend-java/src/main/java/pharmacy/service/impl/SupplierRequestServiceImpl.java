package pharmacy.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pharmacy.model.SupplierRequest;
import pharmacy.repository.SupplierRequestRepository;
import pharmacy.service.SupplierRequestService;

/**
 * Created by Nadun on 7/1/2017.
 */

@Service
public class SupplierRequestServiceImpl implements SupplierRequestService {
    @Autowired
    private SupplierRequestRepository supplierRequestRepository;

    @Override
    public SupplierRequest save(SupplierRequest supplierRequest) {
        return supplierRequestRepository.save(supplierRequest);
    }
}
