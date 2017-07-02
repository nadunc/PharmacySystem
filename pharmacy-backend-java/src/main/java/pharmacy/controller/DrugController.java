package pharmacy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pharmacy.service.DrugService;

/**
 * Created by Nadun on 6/28/2017.
 */

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "drugs")
public class DrugController {
    @Autowired
    private DrugService drugService;
}
