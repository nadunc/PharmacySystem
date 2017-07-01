package pharmacy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pharmacy.model.SupplierRequest;
import pharmacy.service.SupplierRequestService;

import java.util.List;

/**
 * Created by Nadun on 7/1/2017.
 */
@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "suppliers/requests")
public class SupplierRequestController {
    @Autowired
    private SupplierRequestService supplierRequestService;

    @RequestMapping(value = "", method = RequestMethod.POST, consumes = "application/json")
    private SupplierRequest add(@RequestBody SupplierRequest supplierRequest){
        return supplierRequestService.save(supplierRequest);
    }

    @RequestMapping(value = "", method = RequestMethod.GET, produces = "application/json")
    private List<SupplierRequest> get(){
        return supplierRequestService.get();
    }

}
